import Ember from 'ember';

export default Ember.Mixin.create({
  activate: function() {
    this._super();
    if(!$('nav').hasClass('hide')){
      $('nav').addClass('hide');
    }
    window.scrollTo(0,0);
  }
});
