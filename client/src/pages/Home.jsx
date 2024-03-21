//code a page that welcomes users to the website. it should contain a title of "DebateBros" , with a brief description of what we do. Include a button that says "Login" and another button that says "Signup". These will link to the login and sign up pages once clicked as i have those already created, include that code as well if you can.

import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
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
        </div>
    );
    }

    export default Home;