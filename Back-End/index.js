// // Importing the Express framework for building web applications
// const express= require ("express") 

// // Importing Mongoose for interacting with MongoDB
// const mongoose= require ('mongoose')

// // Importing CORS middleware to handle Cross-Origin Resource Sharing
// const cors = require("cors")

// // Importing the user model for MongoDB schema and operations
// const userModel = require("./models/userModel")

// // Initializing the Express application
// const app = express()

// // Middleware to parse incoming JSON requests
// app.use(express.json())

// // Middleware to allow cross-origin requests
// app.use(cors())


// // Connecting to the MongoDB database using Mongoose
// mongoose.connect("mongodb+srv://mshakin2005:12345@cluster0.ahvz1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

// // Route to handle login requests
// app.post("/login", (req, res) =>{
//     const {email, password} = req.body;  // it stores the data of email and password from received request

//     // It Searches for a user with the provided email in the database
//     userModel.findOne({email: email})
//     .then (user => {
//         if (user) {
//             // If the user is found, check if the password matches
//             if (user.password === password) {
//                 // Send a success response if the password is correct
//                 res.json({ message: "Success" });
//             }
//             else {
//                 // Send an error response if the password is incorrect
//                 res.json({ message: "Incorrect password" });
//             }
//         }
//         else {
//             // Send an error response if no user is found with the provided email
//             res.json({ message: "No record found" });
//         }
//     })
// })

// // Route to handle user registration requests
// app.post('/register', (req, res)=> {

//     // Create a new user in the database using the request body
//     userModel.create(req.body)
//     .then(user =>
//         // Send a success response with the created user data
//          res.json(user))

//     .catch(err =>
//         // Send an error response if an issue occurs during creation 
//         res.json(err))
// })

// // Start the server and listen on port 4000
// app.listen(4000, () => {
//     // Log a message to indicate the server is running
//     console.log("server is running")
// })

// // Importing the Express framework for building web applications
// const express= require ("express") 

// // Importing Mongoose for interacting with MongoDB
// const mongoose= require ('mongoose')

// // Importing CORS middleware to handle Cross-Origin Resource Sharing
// const cors = require("cors")

// // Importing the user model for MongoDB schema and operations
// const userModel = require("./models/userModel")

// // Initializing the Express application
// const app = express()

// // Middleware to allow cross-origin requests
// app.use(cors(
//     {
//         origin: ["*"],
//         methods: ["POST", "GET"],
//         credentials: true
//     }
// ))

// // Middleware to parse incoming JSON requests
// app.use(express.json())

// // Connecting to the MongoDB database using Mongoose
// mongoose.connect("mongodb+srv://root:12345@cluster0.io7zw63.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

// app.get("/", (req, res) => {
//     res.json("Hello");
// })

// // Route to handle login requests
// app.post("/login", (req, res) =>{
//     const {email, password} = req.body;  // it stores the data of email and password from received request

//     // It Searches for a user with the provided email in the database
//     userModel.findOne({email: email})
//     .then (user => {
//         if (user) {
//             // If the user is found, check if the password matches
//             if (user.password === password) {
//                 // Send a success response if the password is correct
//                 res.json({ message: "Success" });
//             }
//             else {
//                 // Send an error response if the password is incorrect
//                 res.json({ message: "Incorrect password" });
//             }
//         }
//         else {
//             // Send an error response if no user is found with the provided email
//             res.json({ message: "No record found" });
//         }
//     })
// })

// // Route to handle user registration requests
// app.post('/register', (req, res)=> {

//     // Create a new user in the database using the request body
//     userModel.create(req.body)
//     .then(user =>
//         // Send a success response with the created user data
//          res.json(user))

//     .catch(err =>
//         // Send an error response if an issue occurs during creation 
//         res.json(err))
// })

// // Start the server and listen on port 4000
// app.listen(4000, () => {
//     // Log a message to indicate the server is running
//     console.log("server is running")
// })