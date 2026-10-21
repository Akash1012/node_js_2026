const { Buffer } = require("buffer");

// Create a buffer from a string
const bufferFromString = Buffer.from("Hello, World!");
console.log(
  "Buffer from string:",
  bufferFromString,
  bufferFromString.toString(),
);

// Create a buffer of a specific size (10 bytes)
const bufferOfSize = Buffer.alloc(10);
bufferOfSize.write("Hello");
console.log("Buffer of size 10:", bufferOfSize, bufferOfSize.toString());

// Create a buffer from an array of bytes
const bufferFromArray = Buffer.from([0x48, 0x65, 0x6c, 0x6c, 0x6f]);
console.log("Buffer from array:", bufferFromArray);

// Convert a buffer back to a string
const stringFromBuffer = bufferFromString.toString();
console.log("String from buffer:", stringFromBuffer);

// Write data to a buffer
bufferOfSize.write("Node.js");
console.log("Buffer after writing data:", bufferOfSize);

// Read data from a buffer
const readData = bufferOfSize.toString("utf-8", 0, 7); // Read first 7 bytes
console.log("Read data from buffer:", readData);

// Concatenate buffers
const concatenatedBuffer = Buffer.concat([bufferFromString, bufferFromArray]);
console.log("Concatenated buffer:", concatenatedBuffer.toString());

// Slice a buffer
const slicedBuffer = bufferFromString.slice(0, 5);
console.log("Sliced buffer:", slicedBuffer.toString());
