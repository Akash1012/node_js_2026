const fs = require("fs"); // built in module
const content = fs.readFileSync("notes.txt", "utf-8");

// fs.writeFileSync("copy.txt", content, "utf-8"); // create a new file and write the content of notes.txt into it
// appendFileSync create a new file if it doesn't exist and append the content to it

// fs.mkdirSync("newFolder/games/abc", {
//   recursive: true,
// }); // create a new folder

// fs.rmdirSync("newFolder/games"); // remove a folder

fs.unlinkSync("copy.txt"); // remove a file
console.log(content);
