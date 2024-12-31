// Created intro function to display intro section

function Intro() {
    return (
        <>
            {/* Container for the entire intro section */}
            <div className="intro">
                <div className="watch_img"> {/* Container for the watch image */}
                    <img src="/images/G-shock watch.png" alt="" /> {/* Image is imported from public folder */}
                </div>

                {/* Container for the watch details */}
                <div className="watch-detail">
                    <p className="collab">Charles Darwin Foundation collaboration model</p>
                    <p className="watch-title">GA-B2100CD-1A7</p>
                    <p className="watch-desc">Show your love of the Galápagos and the Charles Darwin Foundation with a G-SHOCK inspired by animals living in these gorgeous islands.</p>

                    {/* Buttons */}
                    <button>Discover</button>
                    <button className="Cart">Add to Cart</button>
                </div>
            </div>
        </>
    );
}

export default Intro; 