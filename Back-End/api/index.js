const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const serverless = require("serverless-http");
const userModel = require("../models/userModel");

const app = express();

app.use(cors({
    origin: "*", // Or add your frontend URL here
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect("your-mongo-uri-here");

// Routes
app.get("/", (req, res) => {
    res.json("Hello from Vercel Serverless!");
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) return res.json({ message: "No record found" });
    if (user.password !== password) return res.json({ message: "Incorrect password" });

    res.json({ message: "Success" });
});

app.post("/register", async (req, res) => {
    try {
        const user = await userModel.create(req.body);
        res.json(user);
    } catch (err) {
        res.json(err);
    }
});

module.exports = serverless(app);