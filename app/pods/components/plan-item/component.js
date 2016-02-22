import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['frame', 'flex-auto', 'flex', 'flex-column'], 

  scopes: Ember.computed('plan.scopes.@each.paidFor', function(){
    return this.get('plan.scopes').filter((scope) => {
      if(this.get('showPaidOnly')){
        return scope.get('paidFor');
      }
      return true; // default show all
    });
  })
});
