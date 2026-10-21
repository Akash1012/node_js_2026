const EventEmitter = require("events");

class ChatRoom extends EventEmitter {
  constructor() {
    super();
    this.users = new Set();
  }

  join(user) {
    this.users.add(user);
    console.log(`${user} has joined the chat room.`, this.users);
    this.emit("userJoined", user);
  }

  leave(user) {
    if (this.users.has(user)) {
      this.users.delete(user);
      console.log(`${user} has left the chat room.`);
      this.emit("userLeft", user);
    } else {
      console.log(`${user} is not in the chat room.`);
    }
  }

  sendMessage(user, message) {
    if (this.users.has(user)) {
      console.log(`${user}: ${message}`);
      this.emit("messageSent", { user, message });
    } else {
      console.log(`${user} is not in the chat room. Cannot send message.`);
    }
  }
}

module.exports = ChatRoom;
