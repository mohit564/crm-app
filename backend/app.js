const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const authRoute = require("./routes/auth");

const PORT = process.env.PORT || 5000;

mongoose.connect(
  process.env.DB_HOST,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to DB");
  }
);

// configure express
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(cors());
app.use("/api/user", authRoute);

app.get("/", (req, res) => {
  res.send("Welcome to CRM App!!! Created by Mohit Dhule.");
});

app.listen(PORT, () => {
  console.log("Server up and listening on port " + PORT);
});
