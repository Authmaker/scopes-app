import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  name: attr('string'),
  stripePlan: DS.belongsTo('stripe-plan', {
    async: true
  }),
  scopes: DS.hasMany('scopes', {
    async: true
  }),
  lowValue: attr('boolean'),
});
