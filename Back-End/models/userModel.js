// Importing Mongoose library to define and interact with MongoDB schemas
const mongoose= require ('mongoose')

// Created a schema to store the data in MongoDB
const userSchema = new mongoose.Schema({
    // Defining the email field
    email: {
        type: String,
        required: true,
        unique: true
    },

    // Defining the password field
    password: {
        type: String,
        required: true
    },
});

// Creating a Mongoose model for the user schema
// This model represents the "User" collection in the database
const userModel = mongoose.model("User", userSchema)

module.exports= userModel