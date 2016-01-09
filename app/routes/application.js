import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    toggleMenu : function(){
      $('nav').toggleClass('hide');
    }
  }
});
