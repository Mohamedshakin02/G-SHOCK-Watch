const express= require ("express")
const mongoose= require ('mongoose')
const cors = require("cors")
const userModel = require("./models/userModel")

const app = express()
app.use(express.json())
app.use(cors(
    {
        origin: ["http://deploy-mern-1whq.vercel.app"],
        methods:["POST","GET"],
        credentials: true
    }
))

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

app.post('/register', (req, res)=> {
    userModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

app.listen(4000, () => {
    console.log("server is running")
})