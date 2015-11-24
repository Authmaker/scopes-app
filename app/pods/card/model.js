import DS from 'ember-data';
import Ember from 'ember';

var attr = DS.attr;

export default DS.Model.extend({
  default: attr('boolean'),
  name: attr('string'),
  brand: attr('string'),
  country: attr('string'),
  last4: attr('string'),
  exp_month: attr('string'),
  exp_year: attr('string'),
  logo: Ember.computed('brand', function(){
    return this.get('brand').toLowerCase();
  })
});
