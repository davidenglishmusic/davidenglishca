import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['page'],
  page: 1,
  postsPerPage: Ember.computed(function(){
    return 3;
  }),
  currentPage: Ember.computed('page', function(){
    return this.get('page');
  }),
  reverse: function(){
    return this.get('model').toArray().reverse();
  }.property('model.[]'),
  paginated: function(){
    var currentPage = this.get('currentPage');
    var postsPerPage = this.get('postsPerPage');
    if (currentPage == 1) {
      return this.get('reverse').slice(0,3);
    }
    else{
      return this.get('reverse').slice(currentPage * postsPerPage - postsPerPage, currentPage * postsPerPage);
    }
  }.property('model.[]', 'page')
});
