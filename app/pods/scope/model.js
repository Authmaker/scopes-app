import DS from 'ember-data';

var attr = DS.attr;

var scope = DS.Model.extend({
  name: attr('string'),
  scope: attr('string'),
  paidFor: attr('boolean'),
  description: attr('string'),
  plan: attr('string'),
});

export default scope;
