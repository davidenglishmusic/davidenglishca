import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('posts', { path: "/"});
  this.route('posts.show', {path: 'posts/:post_id'});
  this.route('contact');
});

export default Router;
