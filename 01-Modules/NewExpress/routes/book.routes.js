const express = require("express");
const {
  getAllBooks,
  getBookById,
  addNewBook,
  deleteBookById,
} = require("../controllers/book.controller");
const router = express.Router();

router.get("/", getAllBooks);
router.get("/:id", getBookById);
router.post("/", addNewBook);
router.delete("/:id", deleteBookById);

module.exports = router;
