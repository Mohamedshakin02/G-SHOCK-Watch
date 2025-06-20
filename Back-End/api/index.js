const express = require("express");
const cors = require("cors");
const serverless = require("serverless-http");
const connectDB = require("../lib/db");
const userModel = require("../models/userModel");

const app = express();

app.use(cors({ origin: "*", methods: ["GET", "POST"], credentials: true }));
app.use(express.json());

app.get("/", async (req, res) => {
  await connectDB();
  res.json("Hello from Vercel Serverless!");
});

app.post("/login", async (req, res) => {
  await connectDB();
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });
  if (!user) return res.json({ message: "No record found" });
  if (user.password !== password) return res.json({ message: "Incorrect password" });
  res.json({ message: "Success" });
});

app.post("/register", async (req, res) => {
  await connectDB();
  try {
    const user = await userModel.create(req.body);
    res.json(user);
  } catch (err) {
    res.json(err);
  }
});

module.exports = serverless(app);
