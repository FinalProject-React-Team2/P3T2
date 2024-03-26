//code a page that welcomes users to the website. it should contain a title of "DebateBros" , with a brief description of what we do. Include a button that says "Login" and another button that says "Signup". These will link to the login and sign up pages once clicked as i have those already created, include that code as well if you can.

import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
<<<<<<< HEAD
        <h1>Welcome to DebateBros</h1>
        <p>
            We are a community of individuals who love to debate. We provide a platform for users to engage in friendly debates on a variety of topics.
        </p>
        <Link to="/login">
            <button>Login</button>
        </Link>
        <Link to="/signup">
            <button>Signup</button>
        </Link>
        <Link to="/dashboard">
            <button>Dashboard</button>
        </Link>
        <Link to="/Aboutus">
            <button>About Us</button>
        </Link>



=======
            <div class="header-content">
                <div class="header-content-inner">
                    <h1> Welcome to DebateBros</h1>
                        <p>We are a community of individuals who love to debate. We provide a platform for users to engage in friendly debates on a variety of topics</p>
                </div>
                <a href="http://localhost:3000/Dashboard" class="btn btn-primary btn-lg">DEBATE NOW</a>
            </div>
        <section class="hero">
            <div class="hero-inner">
                <div class="row">
                    <div class="col-lg-8 col-lg-offset-2">
                        <h1>Test</h1>
                        <h2 class="section-heading">Debate Testing</h2>
                        <a href="https://example.com/" class="btn"></a>
                    </div>
                </div>
            </div>
        </section>


        <div class="row promo">
            <a href="#">
                <div class="col-md-4 promo-item item-1">
                    <h3> Active Debate List </h3>
                </div>
            </a>
            <a href="#"></a>
                <div class="col-md-4 promo-item item-2">
                    <h3> Open Debate Challenges </h3>
                </div>
            <a href="#"></a>
                <div class="col-md-4 promo-item item-3">
                    <h3> Concluded Debates List </h3>
                </div>
>>>>>>> 1d8af36 (update branch)
        </div>
        <section class="content content-3">
            <div class="container">
                <h2 class="section-header">Donate Here!</h2>
                    <p class="lead text-muted">Testing for more details stay tune later</p>
                    <a href="#" class="btn btn-primary btn-lg">Donate Test Button</a>
            </div>
        </section>
        </div>
        
    );
}



    export default Home;