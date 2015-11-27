import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return Ember.$.getJSON('/settings/scopes');
  },

  actions: {
    transitionTo: function (route, model) {
      this.transitionTo(route, model);
    }
  }
});
