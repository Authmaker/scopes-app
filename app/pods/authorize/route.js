import Route from '@ember/routing/route';

export default Route.extend({
    redirect: function(model, transition) {
        this.transitionTo('plans', {queryParams: transition.queryParams});
    }
});
