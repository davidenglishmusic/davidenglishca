import Ember from 'ember';

export default Ember.Component.extend({
  positionalParams: ['paginatedItems', 'itemsPerPage', 'currentPage'],
  olderContentExists: function(){
    var totalPostCount = this.get('paginatedItems').get('length');
    if(totalPostCount > this.get('currentPage') * this.get('itemsPerPage')){
      return true;
    }
    else {
      return false;
    }
  }.property('currentPage'),
  olderPage: function(){
    return parseInt(this.get('currentPage')) + 1;
  }.property('currentPage'),
  newerContentExists: function(){
    var page = this.get('currentPage');
    if(page > 1){
      return true;
    }
    else {
      return false;
    }
  }.property('currentPage'),
  newerPage: function(){
    return parseInt(this.get('currentPage')) - 1;
  }.property('page'),
  needsPaginationSeperator: function(){
    if (this.get('newerContentExist') && this.get('olderContentExists')){
      return true;
    }
    else {
      return false;
    }
  }.property('currentPage')
});
