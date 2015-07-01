import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', {path: '/index'});
  this.route('create');
  this.route('explore');
  this.route('activity');
  this.route('profile');
  this.route('landing', {path: '/'});
  this.route('users', function() {
    this.route('create');
    this.route('show', {path: ':id'});
  });
  this.route('sessions', function() {
    this.route('create');
  });
});

export default Router;
