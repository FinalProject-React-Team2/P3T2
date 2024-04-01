//create an about us page where we just talk about our mission behind debate bros. make it simple and export it

import './aboutus.css';

function About() {
    return (
        <div className="about-us">
            {/* <h1>About Us</h1> */}
            <div className="about">
                <div className="text">
                    <h2>Sean</h2>
                        <p>The Triumvirate is a passionate, three person team dedicated to bringing the best of digital debates into homes everywhere. The team is made up Stuart "Big O" Osborn, Patric "The Star" Ziong, and Sean "no nickname" Harrigan.</p>
                    <div className="data">
                    <img src="/images/sean.png" alt="Sean Harrigan" className="profile-image"></img>
        <a href="https://www.linkedin.com/in/sean-harrigan8/" className="hire">LinkedIn</a>
                        
                    </div>
                </div>
                </div>
                <div className="about">
                <div className="text">
                    <h2>Stuart</h2>
                        <p>The Triumvirate is a passionate, three person team dedicated to bringing the best of digital debates into homes everywhere. The team is made up Stuart "Big O" Osborn, Patric "The Star" Ziong, and Sean "no nickname" Harrigan.</p>
                    <div className="data">
                    <img src="/images/stuart.png" alt="Stuart" className="profile-image"></img>
        <a href="https://www.linkedin.com/in/stuartgosborn/" className="hire">LinkedIn</a>
                        
                    </div>
                </div>
                </div>
                <div className="about">
                <div className="text">
                    <h2>Patric</h2>
                        <p>The Triumvirate is a passionate, three person team dedicated to bringing the best of digital debates into homes everywhere. The team is made up Stuart "Big O" Osborn, Patric "The Star" Ziong, and Sean "no nickname" Harrigan.</p>
                    <div className="data">
                    <img src="/images/patric.png" alt="Patric" className="profile-image"></img>
        <a href="https://www.linkedin.com/in/patric-xiong-80a383284" className="hire">LinkedIn</a>
                        
                    </div>
                </div>
                </div>
        </div>
    
        
    );
    }

    export default About;