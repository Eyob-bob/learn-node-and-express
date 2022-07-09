const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");

const app = express();

// Import Routes
const postRoute = require("./routes/posts");

// middlewares
app.use(express.json());
// app.get("/posts", (req, res, next) => {
//   console.log("posts running");
//   next();
// });

// routes
app.get("/", (req, res) => {
  res.send("home");
});

app.use("/posts", postRoute);

mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("Connected to DB");
});

app.listen(3000, () => {
  console.log("3000...");
});
