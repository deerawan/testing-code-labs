let sinon = require("sinon");
let filejs = require('./file.js');
const fs = require('fs');
let expect = require('chai').expect;

console.log(filejs);

it('should stub a promise ' ,function() {

  let someArg ="file.xml";

  filejs.test(someArg);
  expect(filejs.param).to.equal('success');
 })