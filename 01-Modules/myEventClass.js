const EventEmitter = require("events");

class Chat extends EventEmitter {
  sendMessage(message) {
    console.log(`Sending message: ${message}`);
    this.emit("messageSent", message + " from Chat class");
  }

  receiveMessage(message) {
    console.log(`Received message: ${message}`);
    this.emit("messageReceived", message);
  }
}

const chat = new Chat();

// Register an event listener for the 'event' event
chat.on("messageSent", (message) => {
  console.log("Message sent:", message);
});

chat.on("messageReceived", (message) => {
  console.log("Message received:", message);
});

// Emit the 'event' event
chat.sendMessage("Hello, World !");
