import DS from 'ember-data';
import Ember from 'ember';

var attr = DS.attr;

export default DS.Model.extend({
  name: attr('string'),
  amount: attr('number'),
  currency: attr('string'),
  trial_period_days: attr('string'),
  interval: attr('number'),
  interval_count: attr('number'),
  computedAmount: Ember.computed('amount', function(){
    return this.get('amount') / 100;
  })
});
