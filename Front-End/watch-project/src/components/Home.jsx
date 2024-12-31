// Import the individual components for the homepage

import About from "./About";  // About section component
import Collections from "./Collections";  // Collections section component
import Features from "./Features";  // Features section component
import Footer from "./Footer";  // Footer section component
import Intro from "./Intro";  // Intro section component

// Created home page to display all components in homepage
function Home() {
    return (
        <>
            {/* Main content section of the homepage */}
            <main>
                <Intro/>
                <About/>
                <Features/>
                <Collections/>
            </main>
            <Footer/>
        </>
    );
}

export default Home; 