function Footer() {
    return (

        <>
            <footer>
                <div className="footer-logo">
                    <img src="/images/G-shock logo-2.jpg" alt="" />
                </div>

                <div className="links">
                    <h1>Links</h1>
                    <ul>
                        <li>About G-Shock</li>
                        <li>Terms & Conditions</li>
                        <li>Frequently Asked Questions (FAQs)</li>
                        <li>Corporate Enquiry</li>
                        <li>Contact Us</li>
                    </ul>
                </div>

                <div className="News">
                    <h1>Sign up and save</h1>
                    <p>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
                    <form action="">
                        <label htmlFor=""><input type="text" placeholder="Enter your email" />
                            <button onClick={(e)=>e.preventDefault()}>
                                <img src="/images/email logo.jpg" alt="" />
                            </button>
                        </label>
                    </form>

                    <div className="social-media">
                        <ul>
                            <li><img src="/images/facebook logo.png" alt="" /></li>
                            <li><img src="/images/instagram logo.png" alt="" /></li>
                            <li><img src="/images/youtube logo.png" alt="" /></li>
                        </ul>
                    </div>
                </div>

            </footer>
            <div className="copyright">
                <p>© 2024 CASIO Middle East and Africa FZE</p>
            </div>
        </>
    );
}

export default Footer; 