// Events Module
// Node.js has a built-in module, called "Events",
// where you can create-, fire-, and listen for- your own events.

// The concept is quite simple: emitter objects emit named events that cause
// previously registered listeners to be called. So, an emitter object
// basically has two main features:
// Emitting name events.
// Registering and unregistering listener functions.


// const event = require("events");
// const EventEmitter = new event.EventEmitter();

// ------------OR-----------------

const EventEmitter = require("events")
const event = new EventEmitter();

// Example 1— Registering for the event to be fired only one time using once.

// Example 2 — Create an event emitter instance and register a couple of callbacks

// Example 3— Registering for the event with callback parameters

event.on('sayMyName',() => {
    console.log("your name is Sai");
});
event.on('sayMyName',() => {
    console.log("your name is Aditya");
});
event.on('sayMyName',() => {
    console.log("your name is Devulapalli");
});

event.emit("sayMyName");

event.on('checkStatus', (sc,msg) => {
    console.log(`status code is ${sc} and the page is ${msg}`);
});
event.emit("checkStatus", 200, 'ok');