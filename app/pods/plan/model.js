import DS from 'ember-data';

var attr = DS.attr;

var plan = DS.Model.extend({
  name: attr('string'),
  stripePlan: attr('string'),
  newSubscriptions: attr('boolean'),
  scopes: DS.hasMany('scopes', {
    async: true
  }),
  lowValue: attr('boolean'),
});

export default plan;
