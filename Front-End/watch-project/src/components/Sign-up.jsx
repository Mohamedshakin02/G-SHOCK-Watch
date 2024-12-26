import { useState } from "react";
import axios from 'axios';
import  { useNavigate } from "react-router-dom";

axios.defaults.withCredentials=true

function Signup() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('/register', {email, password})
        .then(result => {console.log(result);
        alert("Account successfully created!, Please login !");
        navigate('/login');

    })
        .catch(err => console.log(err))
    }

    return (
        <main>
            <div className="signup-bg">
                <div className="signup-bg-2">
                    <div className="signup-box">
                        <h1>Sign Up</h1>
                        <form onSubmit={handleSubmit}>
                            <label><input type="email" 
                            placeholder="Enter your email" 
                            required  
                            onChange={(e) => setEmail (e.target.value)}
                            /></label>

                            <label><input 
                            type="password" 
                            placeholder="Enter your password" 
                            required
                            onChange={(e) => setPassword (e.target.value)} />
                            </label>
                            
                            <button type="submit">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Signup; 