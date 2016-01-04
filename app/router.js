import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('posts');
  this.route('posts.show', {path: 'posts/:post_id'});
  this.resource('posts', { path: "/"});
  this.route('contact');
});

export default Router;
