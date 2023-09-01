const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
const salt = bcrypt.genSaltSync(10);
const secret = "jihseudhffgweyeye374f3hgbdwfg";

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://jainkhushi25:kj1198071@cluster0.x7qjqc1.mongodb.net/?retryWrites=true&w=majority"
);

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (e) {
    res.status(400).json(e);
  }
});
//comment

app.listen(4000);
