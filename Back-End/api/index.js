const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const serverless = require("serverless-http");
const userModel = require("../models/userModel"); // Adjust path if needed

const app = express();

// Middleware
app.use(cors({
  origin: "*",
  methods: ["POST", "GET"],
  credentials: true
}));
app.use(express.json());

let isConnected = false;

async function connectDB() {
  if (isConnected) return;
  try {
    await mongoose.connect("mongodb+srv://root:12345@cluster0.io7zw63.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    isConnected = true;
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB error:", err.message);
  }
}

// Routes
app.get("/", async (req, res) => {
  await connectDB();
  res.json("Hello");
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

// Export for Vercel
module.exports = serverless(app);