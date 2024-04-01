//create an about us page where we just talk about our mission behind debate bros. make it simple and export it

import './aboutus.css';

function About() {
    return (
        <div className="about-us">
             <div class="mission">
        <h2>Our Mission</h2>
        <p>At DebateCloud, we believe in the power of debate to inspire change, foster understanding, and build communities. Our mission is to provide a user-friendly, accessible platform where anyone, anywhere, can participate in meaningful debates on a wide range of topics. The Triumvirate is a passionate, three person team dedicated to bringing the best of digital debates into homes everywhere.
        </p></div>
            {/* <h1>About Us</h1> */}
            <div className="about">
                <div className="text">
                    <h2>Sean</h2>
                        <p>"Short Bio about yourself".</p>
                    <div className="data">
                    <img src="/images/sean.png" alt="Sean Harrigan" className="profile-image"></img>
        <a href="https://www.linkedin.com/in/sean-harrigan8/" className="hire">LinkedIn</a>
                        
                    </div>
                </div>
                </div>
                <div className="about">
                <div className="text">
                    <h2>Stuart</h2>
                        <p>"Short Bio about yourself".</p>
                    <div className="data">
                    <img src="/images/stuart.png" alt="Stuart" className="profile-image"></img>
        <a href="https://www.linkedin.com/in/stuartgosborn/" className="hire">LinkedIn</a>
                        
                    </div>
                </div>
                </div>
                <div className="about">
                <div className="text">
                    <h2>Patric</h2>
                        <p>"Short Bio about yourself".</p>
                    <div className="data">
                    <img src="/images/patric.png" alt="Patric" className="profile-image"></img>
        <a href="https://www.linkedin.com/in/patric-xiong-80a383284" className="hire">LinkedIn</a>
                        
                    </div>
                </div>
                </div>
                <div class="promise">
        <h2>Our Promise</h2>
        <p>As we continue to grow, we promise to stay true to our core values of inclusivity, innovation, and integrity. Join us on this journey, share your voice, and let's make history together.</p>
    </div>
        </div>
    
        
    );
    }

    export default About;