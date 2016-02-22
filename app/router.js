import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route('authorize');
    this.route('plans', function(){
      this.route('payment', {path: ':id'});
    });
});

export default Router;
