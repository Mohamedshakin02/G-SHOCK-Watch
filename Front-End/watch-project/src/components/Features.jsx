// Created features function to display feature section

function Features() {
    return (
        <>
            {/* Container for the entire feature section */}
            <div className="feature-section">
                {/* Heading of the feature section */}
                <div className="feature-heading">
                    <h1>Discover What Makes It Unique</h1>
                </div>

                {/* Container for all the features to display the features in grid layout*/}
                <div className="features-container">
                    <div className="feature feature-1">
                        <img src="/images/collab.png" alt="Collaboration" />  {/* Image is imported from public folder */}
                        <p>Collaboration model</p>
                    </div>

                    <div className="feature feature-2">
                       <img src="/images/shock.png" alt="Shock resistant" />  {/* Image is imported from public folder */}
                       <p>Shock resistant</p>
                    </div>

                    <div className="feature feature-3">
                        <img src="/images/water-resistant.png" alt="Water resistant" />  {/* Image is imported from public folder */}
                        <p>20 bar water resistant</p>
                    </div>

                    <div className="feature feature-4">
                        <img src="/images/your-time.png" alt="Utilize time" />  {/* Image is imported from public folder */}
                       <p>Keeps yourself in time</p>
                    </div>

                   <div className="feature feature-5">
                        <img src="/images/solor.png" alt="Solar power" />  {/* Image is imported from public folder */}
                        <p>Stable solar power</p>
                    </div>

                    <div className="feature feature-6">
                        <img src="/images/bluetooth.png" alt="Bluetooth" />  {/* Image is imported from public folder */}
                        <p>Easy to operate</p>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Features; 