// Created footer function to display the footer

function Footer() {
    return (

        <>
            {/* Footer container */}
            <footer>
                {/* Logo section in the footer */}
                <div className="footer-logo">
                    <img src="/images/G-shock logo-2.jpg" alt="Logo" />  {/* Image is imported from public folder */}
                </div>

                {/* Links section in the footer */}
                <div className="links">
                    {/* Heading for the links section */}
                    <h1>Links</h1>

                    {/* List of footer navigation links */}
                    <ul>
                        <li>About G-Shock</li>
                        <li>Terms & Conditions</li>
                        <li>Frequently Asked Questions (FAQs)</li>
                        <li>Corporate Enquiry</li>
                        <li>Contact Us</li>
                    </ul>
                </div>

                {/* News and sign-up section */}
                <div className="News">
                    <h1>Sign up and Save</h1> {/* Heading and texts for the newsletter sign-up section */}
                    <p>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>

                    {/* Newsletter form for email input */}
                    <form action="">
                        <label htmlFor=""><input type="text" placeholder="Enter your email" />
                            <button onClick={(e)=>e.preventDefault()}> {/* To prevent the reloading the page when the user tries to click the button */}
                                <img src="/images/email logo.jpg" alt="email" /> {/* Image is imported from public folder */}
                            </button>
                        </label>
                    </form>

                    {/* Social media icons section */}
                    <div className="social-media">
                        <ul>
                            <li><img src="/images/facebook logo.png" alt="facebook" /></li>  {/* Image is imported from public folder */}
                            <li><img src="/images/instagram logo.png" alt="instagram" /></li> {/* Image is imported from public folder */}
                            <li><img src="/images/youtube logo.png" alt="youtube" /></li>   {/* Image is imported from public folder */}
                        </ul>
                    </div>
                </div>

            </footer>

            {/* Copyright section at the bottom of the page */}
            <div className="copyright">
                <p>© 2025 CASIO Middle East and Africa FZE</p>
            </div>
        </>
    );
}

export default Footer; 