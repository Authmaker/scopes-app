import { computed } from '@ember/object';
import Component from '@ember/component';

export default Component.extend({

  classNames: ['frame', 'flex-auto', 'flex', 'flex-column'], 

  scopes: computed('plan.scopes.@each.paidFor', function(){
    return this.get('plan.scopes').filter((scope) => {
      if(this.showPaidOnly){
        return scope.get('paidFor');
      }
      return true; // default show all
    });
  })
});
