import Ember from 'ember';

export default Ember.Controller.extend({

  queryParams: [{
    scope: {
      as: 'otherScope'
    }
  }],
  otherScope: '',
});