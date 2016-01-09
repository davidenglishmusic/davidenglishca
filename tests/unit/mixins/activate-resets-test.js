import Ember from 'ember';
import ActivateResetsMixin from '../../../mixins/activate-resets';
import { module, test } from 'qunit';

module('Unit | Mixin | activate resets');

// Replace this with your real tests.
test('it works', function(assert) {
  var ActivateResetsObject = Ember.Object.extend(ActivateResetsMixin);
  var subject = ActivateResetsObject.create();
  assert.ok(subject);
});
