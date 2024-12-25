import { useState } from "react";
import axios from 'axios';
import  { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:4000/login', {email, password})
        .then(result => {
            console.log(result)
            if (result.data.message === "Success") {
                alert(`Login successful!, Welcome back ${email}`);
                navigate('/')
            } else if (result.data.message === "Incorrect password") {
                alert("Incorrect Password, Try again!");
            } else if (result.data.message === "No record found") {
                alert("Data not found, Please Sign Up!");
            }
    })
        .catch(err => console.log(err))
    }

    return (
        <>
            <div className="login-bg">
                <div className="login-bg-2">
                    <div className="login-box">
                        <h1>Login</h1>
                        <form onSubmit={handleSubmit}>
                            <label><input type="email" 
                            placeholder="Enter your email" 
                            required
                            onChange={(e) => setEmail (e.target.value)} />
                            </label>

                            <label><input type="password"
                             placeholder="Enter your password" 
                             required 
                             onChange={(e) => setPassword (e.target.value)}/>
                             </label>

                            <button type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login; 