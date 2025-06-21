// import { useState } from "react";  // Import React hooks (useState for state management)
// import axios from 'axios';   // Import axios for making HTTP requests
// import  { useNavigate } from "react-router-dom";  // Import useNavigate for navigating from one page to other page

// // Created signup function to display signup section in signup page
// function Signup() {

//     // State hooks to store the email and password entered by the user
//     const [email, setEmail] = useState()
//     const [password, setPassword] = useState()

//     // stored useNavigate function in navigate variable for redirecting page
//     const navigate = useNavigate()

//     // handleSubmit function for form submission
//     const handleSubmit = (e) => {
//         e.preventDefault()  // Prevents reloading the page
//         // Sending signup data (email, password) to the backend using axios
//         axios.post('http://localhost:4000/register', {email, password})

//         // Handling the response from the backend
//         .then(result => {console.log(result);
//             // Check if the signup was successful based on the message in the response
//         alert("Account successfully created!, Please login !");   // Alert message displays when acoound is successfuly created
//         navigate('/login');  // Redirect to the login page when its sign up
//     })

//     // Catch any errors that occur during the request and displays the alert message to user that server is not connected
//     .catch(err => {console.log(err);
//         alert("Server is not connected")
//    })
// }

//     return (
//         <main>
//             <div className="signup-bg">  {/* this div for signup page image background */}
//                 <div className="signup-bg-2">  {/* this div for signuo page white transparent background */}
//                     <div className="signup-box">  {/* this div is for signup container */}
//                         <h1>Sign Up</h1>   {/* Heading for the signup section */}

//                         {/* Signup form with input fields and onSubmit event */}
//                         <form onSubmit={handleSubmit}>
//                             <label><input type="email" 
//                             placeholder="Enter your email" 
//                             required  
//                             onChange={(e) => setEmail (e.target.value)}/>  {/*Update email state*/}
//                             </label>

//                             <label><input 
//                             type="password" 
//                             placeholder="Enter your password" 
//                             required
//                             onChange={(e) => setPassword (e.target.value)} />  {/*Update password state*/}
//                             </label>
                            
//                             {/* Submit button for the form */}
//                             <button type="submit">Sign Up</button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </main>
//     );
// }
// export default Signup; 

import { useState } from "react";  // Import React hooks (useState for state management)
import axios from 'axios';   // Import axios for making HTTP requests
import  { useNavigate } from "react-router-dom";  // Import useNavigate for navigating from one page to other page

// Created signup function to display signup section in signup page
function Signup() {

    // State hooks to store the email and password entered by the user
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    // stored useNavigate function in navigate variable for redirecting page
    const navigate = useNavigate()

    axios.defaults.withCredentials = true;

    // handleSubmit function for form submission
    const handleSubmit = (e) => {
        e.preventDefault()  // Prevents reloading the page
        // Sending signup data (email, password) to the backend using axios
        axios.post('https://g-shock-backend.onrender.com/register', {email, password})

        // Handling the response from the backend
        .then(result => {console.log(result);
            // Check if the signup was successful based on the message in the response
        alert("Account successfully created!, Please login !");   // Alert message displays when acoound is successfuly created
        navigate('/login');  // Redirect to the login page when its sign up
    })

    // Catch any errors that occur during the request and displays the alert message to user that server is not connected
    .catch(err => {console.log(err);
        alert("Server is not connected")
   })
}

    return (
        <main>
            <div className="signup-bg">  {/* this div for signup page image background */}
                <div className="signup-bg-2">  {/* this div for signuo page white transparent background */}
                    <div className="signup-box">  {/* this div is for signup container */}
                        <h1>Sign Up</h1>   {/* Heading for the signup section */}

                        {/* Signup form with input fields and onSubmit event */}
                        <form onSubmit={handleSubmit}>
                            <label><input type="email" 
                            placeholder="Enter your email" 
                            required  
                            onChange={(e) => setEmail (e.target.value)}/>  {/*Update email state*/}
                            </label>

                            <label><input 
                            type="password" 
                            placeholder="Enter your password" 
                            required
                            onChange={(e) => setPassword (e.target.value)} />  {/*Update password state*/}
                            </label>
                            
                            {/* Submit button for the form */}
                            <button type="submit">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default Signup; 