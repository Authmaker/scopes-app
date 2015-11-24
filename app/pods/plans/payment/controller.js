import Ember from 'ember';

export default Ember.Controller.extend({
  payButtonDisabled: true,

  actions: {
    cardChanged: function(card) {
      if (card === 'newCard') {
        return this.set('payButtonDisabled', false);
      }
      return this.set('payButtonDisabled', true);
    },

    processStripeToken: function(token) {
      return Ember.$.ajax({
        method: 'POST',
        dataType: 'json',
        url: `/api/stripePlans/subscribe`,
        data: {
          planId: this.get('model.plan.stripePlan.id'),
          token: token
        },
      }).then(() => {

      }).then(null, (err) => {
        console.log(err);
      });
    }
  }

});
