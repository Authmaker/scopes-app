import $ from 'jquery';
import { isEmpty } from '@ember/utils';
import { computed } from '@ember/object';
import Controller, { inject as controller } from '@ember/controller';

export default Controller.extend({
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

  processPayment(token) {
    return $.ajax({
      method: 'POST',
      dataType: 'json',
      url: `/v1/stripe-plans/subscribe`,
      data: {
        stripePlanId: this.get('model.plan.stripePlan.id'),
        internalPlanId: this.get('model.plan.id'),
        token,
      },
    }).then(() => {
      window.location.reload();
    }).then(null, (err) => {
      console.log(err);
    });
  },

  actions: {
    payForPlan: function(token) {
      this.processPayment(token);
    },

    processStripeToken: function(token) {
      this.processPayment(token.id);
    }
  }

});
