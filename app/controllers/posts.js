import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['page'],
  page: null,
  POSTS_PER_PAGE: 3,
  reverse: function(){
    return this.get('model').toArray().reverse();
  }.property('model.[]'),
  paginated: function(){
    var page = this.get('page');
    if (page){
      return this.get('reverse').slice(page * this.get('POSTS_PER_PAGE') - this.get('POSTS_PER_PAGE'), page * this.get('POSTS_PER_PAGE'));
    }
    else {
      return this.get('reverse').slice(0,3);
    }
  }.property('model.[]', 'page'),
  olderPostsExist: function(){
    var page = this.get('page');
    var totalPostCount = this.get('model').get('length');
    if(totalPostCount > page * this.get('POSTS_PER_PAGE')){
      return true;
    }
    else {
      return false;
    }
  }.property('page'),
  olderPage: function(){
    if (this.get('page') == null){
      return 2;
    }
    else {
      return parseInt(this.get('page')) + 1;
    }
  }.property('page'),
  newerPostsExist: function(){
    var page = this.get('page');
    if(page > 1){
      return true;
    }
    else {
      return false;
    }
  }.property('page'),
  newerPage: function(){
    return parseInt(this.get('page')) - 1;
  }.property('page'),
  needsPaginationSeperator: function(){
    if (this.get('olderPosts') && this.get('newerPosts')){
      return true;
    }
    else {
      return false;
    }
  }.property('page')
});
