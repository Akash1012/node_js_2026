const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

// Register an event listener for the 'error' event
eventEmitter.on("error", (err) => {
  console.error("An error occurred:", err.message);
});

// Emit the 'error' event with an error object
eventEmitter.emit("error", new Error("Something went wrong!"));
