const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

// Register an event listener for the 'greet' event
eventEmitter.on("greet", (name) => {
  console.log(`Hello, ${name}!`);
});

// Emit the 'greet' event with a name
// eventEmitter.emit("greet", "Alice");

eventEmitter.once("greetOnce", (name) => {
  console.log(`Hello for the first time, ${name}!`);
});

// Emit the 'greetOnce' event with a name
// eventEmitter.emit("greetOnce", "Bob");

// Emit the 'greetOnce' event again to demonstrate that it only triggers once
// eventEmitter.emit("greetOnce", "Charlie");

const myListerner = () => {
  console.log("Event triggered!");
};

// Register the listener for the 'myEvent' event
eventEmitter.on("myEvent", myListerner);

console.log(eventEmitter.listeners("myEvent")); // Output: 1

// Emit the 'myEvent' event
// eventEmitter.emit("myEvent");

// Remove the listener for the 'myEvent' event
// eventEmitter.removeListener("myEvent", myListerner);

// Emit the 'myEvent' event again to demonstrate that the listener has been removed
// eventEmitter.emit("myEvent");
