const fs = require("fs"); // built in module

// async read file
fs.readFile("notes.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error reading file:", err);
    return;
  }
  console.log(data);
});
