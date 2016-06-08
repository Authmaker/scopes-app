import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('plan-item', 'Integration | Component | plan item', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.set('plan', {
    scopes: []
  });

  this.render(hbs`{{plan-item plan=plan}}`);

  assert.equal(this.$().text().trim().substring(0, 8), 'Features');
});
