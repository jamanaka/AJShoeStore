import express from "express";
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Sample Route
app.get("/", (req, res) => {
  res.send("Hello, Express Backend!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});