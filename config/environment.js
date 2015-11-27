/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'authmaker-scopes-app',
    podModulePrefix: 'authmaker-scopes-app/pods',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    contentSecurityPolicy: {
      'default-src': "'none'",
      'img-src': "'self' use.typekit.net data: ",
      'connect-src': "'self' maps.gstatic.com ws://*:49155  http://*:49155",
      'script-src': "'self' 'unsafe-eval' 'unsafe-inline' use.typekit.net",
      'style-src': "'self' 'unsafe-inline' use.typekit.net"
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.stripe = {
    };
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'auto';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.stripe = {
      key: "ADD_THIS_CHRIS"
    };
  }

  return ENV;
};
