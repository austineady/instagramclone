import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('create');
  this.route('explore');
  this.route('activity');
  this.route('profile');
});

export default Router;
