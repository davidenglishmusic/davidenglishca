import Ember from 'ember';
import ResetScrollMixin from '../../mixins/reset-scroll';

export default Ember.Route.extend(ResetScrollMixin, {
  activate: function() {
    this._super.apply(this, arguments);
  }
});
