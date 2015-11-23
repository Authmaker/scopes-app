import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    scope: {
      refreshModel: true
    },
  },
  model: function(params) {
    console.log(params);
    return this.store.find('plans', params);
  },
});
