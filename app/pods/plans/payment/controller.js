import Ember from 'ember';

export default Ember.Controller.extend({
  showPaymentChoices: Ember.computed('model.cards.[]', function(){
    if(Ember.isEmpty(this.get('model.cards'))) {
      this.set('showStripeButton', true);
      return false;
    }
    return true;
  }),

  chosenCard: Ember.computed('model.cards.[]', function(){
    return this.get('model.cards.firstObject.id') || 'newCard';
  }),

  actions: {
    payForPlan: function(token) {
      return Ember.$.ajax({
        method: 'POST',
        dataType: 'json',
        url: `/api/stripePlans/subscribe`,
        data: {
          stripePlanId: this.get('model.plan.stripePlan.id'),
          internalPlanId: this.get('model.plan.id'),
          token: token,
        },
      }).then(() => {

      }).then(null, (err) => {
        console.log(err);
      });
    },
    processStripeToken: function(token) {
      return Ember.$.ajax({
        method: 'POST',
        dataType: 'json',
        url: `/api/stripePlans/subscribe`,
        data: {
          stripePlanId: this.get('model.plan.stripePlan.id'),
          internalPlanId: this.get('model.plan.id'),
          token: token.id,
        },
      }).then(() => {

      }).then(null, (err) => {
        console.log(err);
      });
    }
  }

});
