import Ember from 'ember';

export default Ember.Mixin.create({
  activate: function() {
    this._super();
    if(!Ember.$('nav').hasClass('hide')){
      Ember.$('nav').addClass('hide');
    }
    Ember.$('body').scrollTop(0);
  }
});
