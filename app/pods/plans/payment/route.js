import { hash } from 'rsvp';
import Route from '@ember/routing/route';

export default Route.extend({
  model: function(params) {
    return hash({
      plan: this.store.findRecord('plan', params.id),
      cards: this.store.findAll('card')
    });
  },
});
