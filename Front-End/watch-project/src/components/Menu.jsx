// Import React and the useState hook for managing state
import React, { useState } from "react"

// Import components from react-router-dom for routing functionality
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Import the individual page components for routing
import Home from './Home';
import Login from './Login';
import Signup from './Sign-up';


// Created Menu function to display the header with navigation links
function Menu() {
    // State to track whether the menu is open or closed
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        // BrowserRouter is used here to enable routing in react js (it will redirect the page without actually loading)
        <BrowserRouter>
            <>
                {/* Header section for the navigation bar */}
                <header>
                    {/* Logo section with a link to the homepage */}
                    <ul className="Logo">
                        {/* Image is inserted from public folder */}
                        <li><Link to="/" title="Logo"><img src="/images/G-shock logo.png" alt="Logo" /></Link></li>
                    </ul>

                    {/* Navigation bar */}  
                    <nav>
                        {/* Hamburger menu for displaying the menu for tablet and mobile screen*/}
                        <div className="menu" 
                        onClick={() => {
                            // The menu bar opens and closes each time the Hamburger button is clicked.
                            setMenuOpen(!menuOpen);
                        }}>
                            {/* Hamburger icon represented by three spans */}
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                        {/* Navigation menu items, visibility toggled based on menuOpen state */}
                        <ul className={`Menus ${menuOpen ? "" : "open"}`}>
                                <li><Link to="/">Home</Link></li>  {/* The page when website opens */}
                                <li><Link to="/">About</Link></li>
                                <li><Link to="/">Features</Link></li>
                                <li><Link to="/">Contact</Link></li>

                                {/* Buttons for Login and Sign Up*/}
                                <ul className="buttons">
                                     {/* Link to the login page and sign-up page*/}
                                    <li><Link to="/login"><button className="button button-1">Login</button></Link></li>
                                    <li><Link to="/sign-up"><button className="button button-2">Sign Up</button></Link></li>
                                </ul>
                            </ul>
                    </nav>
                </header>

                <>
                    {/* setting the paths for different pages */}
                    <Routes>
                        <Route path="/" element={<Home />} />  {/* path for the homepage */}
                        <Route path="/login" element={<Login />} />  {/* path for the login page */}
                        <Route path="/sign-up" element={<Signup />} />  {/* path for the signup page */}
                    </Routes>
                </>
            </>
        </BrowserRouter>
    );
}

export default Menu;
