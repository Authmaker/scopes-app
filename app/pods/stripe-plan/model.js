import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  name: attr('string'),
  amount: attr('number'),
  currency: attr('string'),
  trial_period_days: attr('string'),
  interval: attr('number'),
  interval_count: attr('number'),
});
