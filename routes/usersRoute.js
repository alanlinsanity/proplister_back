const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const mongoURL = `mongodb+srv://alanlinsanity:32s9221683g@cluster0.vq2et.mongodb.net/free2list`;

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

const User = require("../models/user");

router.get("/seed", async (req, res) => {
  const users = [
    {
      name: "Alan",
      email: "alan@gmail.com",
      contact: 90497018,
      password: "alan123",
      listings: [],
      isAdmin: true,
    },
    {
      name: "Ben",
      email: "ben@gmail.com",
      contact: 91234567,
      password: "ben123",
      listings: [],
      isAdmin: false,
    },
    {
      name: "Chris",
      email: "chris@gmail.com",
      contact: 98765432,
      password: "chris123",
      listings: [],
      isAdmin: true,
    },
    {
      name: "David",
      email: "david@gmail.com",
      contact: 81234567,
      password: "david123",
      listings: [],
      isAdmin: false,
    },
  ];
  await User.deleteMany({});
  await User.insertMany(users);
  res.json(users);
});



router.post("/register", async (req, res) => {
  console.log("req.body", req.body);
  try {
    const createdUser = await User.create(req.body);
    const user = await User.findOne({ username: req.body });

    await user.save();

    res.status(200).send(createdUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/all", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email, password: password });
    if (user) {
      const temp = {
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        _id: user._id,
        contact: user.contact,
      };
      res.send(temp);
    } else {
      return res.status(400).json({ message: "Login failed" });
    }
  } catch (error) {
    return res.status(400).json({ error });
  }
});

module.exports = router;
