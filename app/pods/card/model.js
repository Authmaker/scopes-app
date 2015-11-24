import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  name: attr('string'),
  brand: attr('string'),
  country: attr('string'),
  last4: attr('string'),
  exp_month: attr('string'),
  exp_year: attr('string')
});
