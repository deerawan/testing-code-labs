const SomeLib = require('./SomeLib');

module.exports.MyWrapper = class MyWrapper {
    constructor(username, password) {
        this._someLib = new SomeLib(username, password);
    }

    async getFoo(id) {
        // other business logic omitted
        // which was tested in the MyWrapper.spec.js
        return this._someLib.findById(id)
    }

    async saveFoo(object) {
        // other business logic omitted
        // which was tested in the MyWrapper.spec.js
        return this._someLib.save(object)
    }
}