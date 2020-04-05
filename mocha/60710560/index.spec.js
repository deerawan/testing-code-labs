let expect = require('chai').expect;

it('checks equality' ,function() {
  const actual = new Error('name property is missing');
  const expected = new Error('name property is missing');

  expect(actual.message).to.equal(expected.message);
 })