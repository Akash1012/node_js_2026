// require("dotenv/config");

const express = require("express");
const app = express();

const bookRoutes = require("./routes/book.routes.js");
const loggerMiddleware = require("./middlewares/logger.js");
const PORT = 8000;

app.use(express.json());

app.use(loggerMiddleware);
app.use((req, res, next) => {
  console.log("Request received:", req.method, req.url);
  next();
});

app.use("/books", bookRoutes);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
