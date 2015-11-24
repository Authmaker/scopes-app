import Ember from 'ember';
// import Config from 'authmaker-scopes-app/config/environment';

export default Ember.Controller.extend({
  payButtonDisabled: true,

  actions: {
    cardChanged: function(card){
      if(card === 'newCard') {
        return this.set('payButtonDisabled', false);
      }
      return this.set('payButtonDisabled', true);
    },

    processStripeToken: function(token){
      return Ember.$.ajax({
        method: 'POST',
        dataType: 'json',
        url: `/api/stripePlans/subscribe`,
        data: {
          planId: "123_plan_id",
          token: token
        },
      }).then(() => {

      }).then(null, (err) => {
        console.log(err);
      });
    }
  }

});
