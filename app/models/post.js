import DS from 'ember-data';
import Ember from 'ember';

var Post = DS.Model.extend({
  title: DS.attr('string'),
  mdURL: DS.attr('string'),
  createdAt: DS.attr('string'),
  md: DS.attr('string'),
  getMD: function() {
    var self = this;
    Ember.$.get( this.get('mdURL'), function( data ) {
      self.set('md', data);
    });
  }.on('init')
});

export default Post;
