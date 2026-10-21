const { pgTable, varchar, uuid, text } = require("drizzle-orm/pg-core");
const authorTable = require("./author.modles");

const booksModel = pgTable("books", {
  id: uuid().primaryKey().defaultRandom(),
  title: varchar({
    length: 100,
  }).notNull(),
  description: text(),
  authorId: uuid()
    .references(() => authorTable.id)
    .notNull(),
});

module.exports = booksModel;
