// require("dotenv").config();
// const app = require("./src/app");
// const connectToDB = require("./src/config/database");

// connectToDB();

// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });
require("dotenv").config();

const app = require("./src/app");
const connectToDB = require("./src/config/database");

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await connectToDB();

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to connect to database:", err);
    process.exit(1);
  }
}

startServer();