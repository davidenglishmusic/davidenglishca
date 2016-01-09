import Ember from 'ember';
import ActivateResetsMixin from '../mixins/activate-resets';

export default Ember.Route.extend(ActivateResetsMixin, {
  activate: function() {
    this._super.apply(this, arguments);
  }
});
