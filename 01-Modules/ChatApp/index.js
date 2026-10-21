const ChatRoom = require("./chatRoom");

const chatRoom = new ChatRoom();

// // Register an event listener for the 'userJoined' event
chatRoom.on("userJoined", (user) => {
  console.log(`Welcome ${user} to the chat room!`);
});

// // Register an event listener for the 'userLeft' event
chatRoom.on("userLeft", (user) => {
  console.log(`Goodbye ${user}!`);
});

// // Register an event listener for the 'messageSent' event
chatRoom.on("messageSent", ({ user, message }) => {
  console.log(`Message from ${user}: ${message}`);
});

// // Example usage
chatRoom.join("Alice");
chatRoom.sendMessage("Alice", "Hello everyone!");
chatRoom.leave("Alice");
