import $ from 'jquery';
import Route from '@ember/routing/route';

export default Route.extend({
  model: function(){
    return $.getJSON('/settings/scopes');
  },

  actions: {
    transitionTo: function (route, model) {
      this.transitionTo(route, model);
    }
  }
});
