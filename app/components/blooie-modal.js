import Ember from 'ember';

export default Ember.Component.extend({

  hasBeenInserted: false,

  onDidInsertElement: function() {
    // Make sure <body> can't scroll
    Ember.$('body').addClass('modal-open');

    setTimeout(function() {
      this.set('hasBeenInserted', true);
    }.bind(this), 1);

  }.on('didInsertElement'),

  transitionEnd: function() {
    if (!this.get('hasBeenInserted')) {
      this.sendAction('close');
    }
  },

  click: function(e) {
    // We're only interested if this hasn't bubbled
    if (Ember.$(e.target).hasClass('modal')) {
      if(!this.get('disableClose')){
        this.send('close');
      }
    }
  },

  actions: {
    close: function() {
      this.set('hasBeenInserted', false);

      // Allow <body> to scroll again
      Ember.$('body').removeClass('modal-open');
    }
  }
});
