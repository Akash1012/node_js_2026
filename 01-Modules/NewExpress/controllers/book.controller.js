const fs = require("fs");
const path = require("path");

const bookFilePath = path.join(__dirname, "../book.json");

// read books from the JSON file
function readBooksFromFile() {
  try {
    const data = fs.readFileSync(bookFilePath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading books from file:", err);
    return [];
  }
}

const getAllBooks = (req, res) => {
  const books = readBooksFromFile();
  res.status(200).json({ success: true, data: books });
};

const getBookById = (req, res) => {
  const { id } = req.params;

  const books = readBooksFromFile()?.books;
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return res
      .status(404)
      .json({ success: false, message: `Book not found with ID: ${id}` });
  }
  res.status(200).json({ success: true, data: book });
};

const addNewBook = (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res
      .status(400)
      .json({ success: false, message: "Title is required" });
  }

  const books = readBooksFromFile()?.books || [];
  const newBook = {
    id: books.length + 1,
    title,
  };

  books.push(newBook);

  try {
    fs.writeFileSync(bookFilePath, JSON.stringify({ books }));
    res.status(201).json({ success: true, data: newBook });
  } catch (err) {
    console.error("Error writing book to file:", err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

const deleteBookById = (req, res) => {
  const { id } = req.params;

  const books = readBooksFromFile()?.books;
  const bookIndex = books.findIndex((b) => b.id === parseInt(id));

  if (bookIndex === -1) {
    return res
      .status(404)
      .json({ success: false, message: `Book not found with ID: ${id}` });
  }

  books.splice(bookIndex, 1);

  try {
    fs.writeFileSync(bookFilePath, JSON.stringify({ books }));
    res
      .status(200)
      .json({ success: true, message: "Book deleted successfully" });
  } catch (err) {
    console.error("Error writing book to file:", err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  addNewBook,
  deleteBookById,
};
