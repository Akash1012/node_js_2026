const fs = require("fs");
const path = require("path");

const logFilePath = path.join(__dirname, "..", "request_logs.txt");

const loggerMiddleware = (req, res, next) => {
  console.log("vdsfbvdbdfb", `${req.method} ${req.url}`);
  const log = `${new Date().toISOString()} - ${req.method} ${req.url}\n`;
  fs.appendFileSync(logFilePath, log);
  next();
};

module.exports = loggerMiddleware;
