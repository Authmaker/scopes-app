import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('PaymentRoute', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    var route = this.owner.lookup('route:plans/payment');
    assert.ok(route);
  });
});
