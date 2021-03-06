/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'instagramclone',
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
      applicationId: 'lzgTt1afHfc7mpl6y5M0vRwtf1C4gRdgR3hR7kkN',
      restApiId: '3if87EgnMwEoxPk7r1k0iyuDCKD40t4vTyePxdSu'
    },

    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self'",
      'font-src': "'self'",
      'connect-src': "'self' api.parse.com",
      'img-src': "'self'",
      'style-src': "'self' 'unsafe-inline' 'fonts.googleapis.com' 'fonts.googleapis.com' 'maxcdn.bootstrapcdn.com' 'fonts.gstatic.com' 'download.unsplash.com'",
      'media-src': "'self'"
    },
    'simple-auth': {
      routeAfterAuthentication: 'landing'
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
