import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route('auth');

    this.route('plans', function(){
      this.route('authorize');
      this.route('cart');
      this.route('payment');
      this.route('/');
    });
});

export default Router;
