const MyWrapper = require('./MyWrapper');

const process = async (message) => {
    const wrapper = new MyWrapper('whatever', 'password')
    // some business logic around the message...omitted
    const data = wrapper.getFoo(message.id);
    if(data) {
       // do stuff with the data
       wrapper.saveFoo(data);
    } else {
       console.log('no data found for message', message);
    }
}
module.exports = { process }