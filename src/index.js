import express from "express";
import connectDB from "./db/index.js";  // Correct import

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();  // Make sure this is called

app.get("/", (req, res) => {
  res.send("Server is  not running");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
