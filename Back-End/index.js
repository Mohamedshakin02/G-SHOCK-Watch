const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userModel = require("./models/userModel");

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb+srv://root:12345@cluster0.io7zw63.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("✅ MongoDB connected");
}).catch(err => {
    console.error("❌ MongoDB connection error:", err);
});

// Routes
app.get("/", (req, res) => {
    res.send("✅ Backend working from Render!");
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });
        if (!user) return res.json({ message: "No record found" });
        if (user.password !== password) return res.json({ message: "Incorrect password" });
        res.json({ message: "Success" });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
});

app.post("/register", async (req, res) => {
    try {
        const user = await userModel.create(req.body);
        res.json(user);
    } catch (err) {
        res.status(400).json({ message: "Error creating user", error: err.message });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
