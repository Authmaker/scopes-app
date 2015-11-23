import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    transitionTo: function (route, model) {
      this.transitionTo(route, model);
    }
  }
});
