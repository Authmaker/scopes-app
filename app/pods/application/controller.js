import Controller from '@ember/controller';

export default Controller.extend({

  queryParams: ['response_type', 'display', 'client_id', 'redirect_uri', 'state', 'previous_location'],

  response_type: '',
  display: '',
  client_id: '',
  redirect_uri: '',
  state: '',
  previous_location: ''
});
