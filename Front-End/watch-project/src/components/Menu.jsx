import React, { useState } from "react"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Sign-up';

function Menu() {

    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <BrowserRouter>
            <>
                <header>
                    <ul className="Logo">
                        <li><Link to="/" title="Logo"><img src="/images/G-shock logo.png" alt="Logo" /></Link></li>
                    </ul>

                    <nav>

                        <div className="menu" 
                        onClick={() => {
                            setMenuOpen(!menuOpen);
                        }}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                        <ul className={`Menus ${menuOpen ? "" : "open"}`}>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/">About</Link></li>
                                <li><Link to="/">Features</Link></li>
                                <li><Link to="/">Contact</Link></li>

                                <ul className="buttons">
                                    <li><Link to="/login"><button className="button button-1">Login</button></Link></li>
                                    <li><Link to="/sign-up"><button className="button button-2">Sign Up</button></Link></li>
                                </ul>
                            </ul>
                    </nav>
                </header>

                <>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/sign-up" element={<Signup />} />
                    </Routes>
                </>
            </>
        </BrowserRouter>
    );
}

export default Menu;
