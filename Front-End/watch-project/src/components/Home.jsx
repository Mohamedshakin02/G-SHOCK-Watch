import About from "./About";
import Collections from "./Collections";
import Features from "./Features";
import Footer from "./Footer";
import Intro from "./Intro";


function Home() {
    return (
        <>
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