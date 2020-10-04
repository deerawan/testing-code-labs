
const assert = require('chai').assert; // include javascript
import { assert } from 'chai'; // include typescript

function byte() {
    return -1;
}

describe("byteToSignedShort()", function()
{
   context("in b argument with the first bit set to 1", function()
   {
       it("should return a negative number", function()
       {
           assert.isBelow(byte(), 0, "");
       })
   })
   context("in b argument with the first bit set to 0", function()
   {
       it("should return a positive number", function()
       {
           assert.isAtLeast(byte(), 0, "");
       })
   })
})