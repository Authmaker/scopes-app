import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return Ember.RSVP.hash({
      plan: this.store.findRecord('plan', params.id),
      cards: this.store.findAll('card')
    });
  },
});
