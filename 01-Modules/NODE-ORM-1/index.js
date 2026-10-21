const dotenv = require("dotenv");
const db = require("./drizzle/src/index");
const { usersTable } = require("./drizzle/src/db/schema");

dotenv.config();

const getAllUsers = async () => {
  try {
    const users = await db.select().from(usersTable);
    console.log("All Users:", users);
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

const createUser = async (id, name, email) => {
  try {
    const newUser = await db
      .insert(usersTable)
      .values({ id, name, email })
      .returning();
    console.log("New User Created:", newUser);
    return newUser;
  } catch (error) {
    console.error("Error creating user:", error);
  }
};

// createUser(1, "John Doe", "john.doe@example.com");
// createUser(2, "Jane Smith", "jane.smith@example.com");

getAllUsers();
