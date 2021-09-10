const EventEmitter = require('events'); // in-built 'events' package

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter(); // creating a new Event Emitter

myEmitter.on('myEvent', () =>{ // listening to this custom event here
  console.log("myEvent has occured!");
});

myEmitter.emit('myEvent'); // event is being fired/activated here