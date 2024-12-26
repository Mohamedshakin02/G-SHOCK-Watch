const express= require ("express")
const mongoose= require ('mongoose')
const cors = require("cors")
const userModel = require("./models/userModel")

const app = express()

app.use(cors(
    {
        origin: ["https://g-shock.vercel.app"],
        methods:["POST","GET"],
        credentials: true
    }
))
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'https://g-shock.vercel.app'); // Frontend URL
//     res.header('Access-Control-Allow-Credentials', 'true');            // Allow cookies
//     res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE'); // Allowed HTTP methods
//     res.header('Access-Control-Allow-Headers', 'Content-Type');        // Allowed headers
//     next();
// });

app.use(express.json())

mongoose.connect("mongodb+srv://mshakin2005:12345@cluster0.ahvz1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

app.post("/login", (req, res) =>{
    const {email, password} = req.body;
    userModel.findOne({email: email})
    .then (user => {
        if (user) {
            if (user.password === password) {
                res.json({ message: "Success" });
            }
            else {
                res.json({ message: "Incorrect password" });
            }
        }
        else {
            res.json({ message: "No record found" });
        }
    })
})

app.post('https://g-shock-backend.vercel.app/register', (req, res)=> {
    userModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

app.listen(4000, () => {
    console.log("server is running")
})