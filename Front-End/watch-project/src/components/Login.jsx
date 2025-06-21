// import { useState } from "react"; // Import React hooks (useState for state management)
// import axios from 'axios';  // Import axios for making HTTP requests
// import  { useNavigate } from "react-router-dom"; // Import useNavigate for navigating from one page to other page

// // Created login function to display login section in login page
// function Login() {

//     // State hooks to store the email and password entered by the user
//     const [email, setEmail] = useState()
//     const [password, setPassword] = useState()

//     // stored useNavigate function in navigate variable for redirecting page
//     const navigate = useNavigate()

//     // handleSubmit function for form submission
//     const handleSubmit = (e) => {
//         e.preventDefault()  // Prevents reloading the page
//         // Sending login data (email, password) to the backend using axios
//         axios.post('http://localhost:4000/login', {email, password})

//         // Handling the response from the backend
//         .then(result => {
//             // Check if the login was successful based on the message in the response
//             console.log(result)
//             if (result.data.message === "Success") {
//                 alert(`Login successful!, Welcome back ${email}`);  // Alert message displays when login is successful
//                 navigate('/')  // Redirect to the homepage when its login
//             } else if (result.data.message === "Incorrect password") {
//                 alert("Incorrect Password, Try again!");  // Alert message displays when login password is incorrect
//             } else if (result.data.message === "No record found") {
//                 alert("Data not found, Please Sign Up!");  // Alert message displays if no matching record is found
//             }
//     })
//          // Catch any errors that occur during the request and displays the alert message to user that server is not connected
//         .catch(err => {console.log(err);
//          alert("Server is not connected")
//     })
        
//     }

//     return (
//         <main>
//             <div className="login-bg"> {/* this div is for login page image background */}
//                 <div className="login-bg-2">   {/* this div is for login page white transparent background */}
//                     <div className="login-box">  {/* this div is for login container */}
//                         <h1>Login</h1>  {/* Heading for the login section */}

//                         {/* Login form with input fields and onSubmit event */}
//                         <form onSubmit={handleSubmit}>
//                             <label><input type="email" 
//                             placeholder="Enter your email" 
//                             required
//                             onChange={(e) => setEmail (e.target.value)} />   {/*Update email state*/}
//                             </label>

//                             <label><input type="password"
//                              placeholder="Enter your password" 
//                              required 
//                              onChange={(e) => setPassword (e.target.value)}/>  {/*Update password state*/}
//                              </label>

//                             {/* Submit button for the form */}
//                             <button type="submit">Login</button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </main>
//     );
// }
// export default Login; 

import { useState } from "react"; // Import React hooks (useState for state management)
import axios from 'axios';  // Import axios for making HTTP requests
import  { useNavigate } from "react-router-dom"; // Import useNavigate for navigating from one page to other page

// Created login function to display login section in login page
function Login() {

    // State hooks to store the email and password entered by the user
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    // stored useNavigate function in navigate variable for redirecting page
    const navigate = useNavigate()

    axios.defaults.withCredentials = true;

    // handleSubmit function for form submission
    const handleSubmit = (e) => {
        e.preventDefault()  // Prevents reloading the page
        // Sending login data (email, password) to the backend using axios
        axios.post('https://g-shock-backend.onrender.com/login', {email, password})

        // Handling the response from the backend
        .then(result => {
            // Check if the login was successful based on the message in the response
            console.log(result)
            if (result.data.message === "Success") {
                alert(`Login successful!, Welcome back ${email}`);  // Alert message displays when login is successful
                navigate('/')  // Redirect to the homepage when its login
            } else if (result.data.message === "Incorrect password") {
                alert("Incorrect Password, Try again!");  // Alert message displays when login password is incorrect
            } else if (result.data.message === "No record found") {
                alert("Data not found, Please Sign Up!");  // Alert message displays if no matching record is found
            }
    })
         // Catch any errors that occur during the request and displays the alert message to user that server is not connected
        .catch(err => {console.log(err);
         alert("Server is not connected")
    })
        
    }

    return (
        <main>
            <div className="login-bg"> {/* this div is for login page image background */}
                <div className="login-bg-2">   {/* this div is for login page white transparent background */}
                    <div className="login-box">  {/* this div is for login container */}
                        <h1>Login</h1>  {/* Heading for the login section */}

                        {/* Login form with input fields and onSubmit event */}
                        <form onSubmit={handleSubmit}>
                            <label><input type="email" 
                            placeholder="Enter your email" 
                            required
                            onChange={(e) => setEmail (e.target.value)} />   {/*Update email state*/}
                            </label>

                            <label><input type="password"
                             placeholder="Enter your password" 
                             required 
                             onChange={(e) => setPassword (e.target.value)}/>  {/*Update password state*/}
                             </label>

                            {/* Submit button for the form */}
                            <button type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default Login; 