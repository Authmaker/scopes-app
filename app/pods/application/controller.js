import Ember from 'ember';
import config from 'authmaker-scopes-app/config/environment';

export default Ember.Controller.extend({

  queryParams: ['response_type', 'display', 'client_id', 'redirect_uri', 'scope', 'state', 'previous_location'],

  response_type: '',
  display: '',
  client_id: '',
  redirect_uri: '',
  scope: '',
  state: '',
  previous_location: ''
});
