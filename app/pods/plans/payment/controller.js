import { isEmpty } from '@ember/utils';
import { computed } from '@ember/object';
import Controller, { inject as controller } from '@ember/controller';
import { task, timeout } from 'ember-concurrency';
import { inject as service } from '@ember/service';

export default Controller.extend({
  ajax: service(),
  notifications: service('notification-messages'),
  application: controller(),

  applicationName: computed('application.model.appName', function(){
    return this.get('application.model.appName') || "AuthMaker";
  }),

  showPaymentChoices: computed('model.cards.[]', function(){
    if(isEmpty(this.get('model.cards'))) {
      this.set('showStripeButton', true);
      return false;
    }
    return true;
  }),

  chosenCard: computed('model.cards.[]', function(){
    return this.get('model.cards.firstObject.id') || 'newCard';
  }),

  processPayment: task(function * (token) {
    console.log('process payment');
    try {
      yield this.ajax.request('/v1/stripe-plans/subscribe', {
        method: 'POST',
        dataType: 'json',
        data: {
          stripePlanId: this.get('model.plan.stripePlan.id'),
          internalPlanId: this.get('model.plan.id'),
          token,
        },
      });

      this.set('successfulPayment', true);
      yield timeout(1000);
      window.location.reload();
    } catch (err) {
      this.notifications.error(`Error Processing Payment: ${err.message}`);
      return;
    }
  }).drop(),

  payForPlan: task(function * (token) {
    yield this.processPayment.perform(token);
  }),

  processStripeToken: task(function * (token) {
    yield this.processPayment.perform(token.id);
  })
});
