const fs1 = require('fs');

let param ="";

// function test (outputParam) {
//   //module.exports.param = fs1.readFileSync(outputParam);
//   (async () => {
//     module.exports.param = await test1();
//   }) ();
// }

async function test (outputParam) {  
  module.exports.param = await test1();
}

function test1 () {
  return new Promise((resolve,reject) => {
    let promiseVar = "success";
    resolve(promiseVar);
  })
}

module.exports = {
  test,
  test1,
}