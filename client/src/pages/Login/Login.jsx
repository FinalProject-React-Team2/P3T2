import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import './Login.css'; 

function Login() {
    // (props)
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (   
    <div className="container my-1">
      <Link to="/signup">← Go to Signup</Link>

      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email address:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}



export default Login;



{/*
    // <div class="wrapper">
    // <div class="container main">
    //     <div class="row">
    //         <div class="col-md-6 side-image">  
    //             <img src="/images/debateroom2.png" size='1000px' alt=""></img>
    //             <div class="text">
    //                 <p>Join the community of debaters</p>
    //             </div>
    //         </div>



  

            <form onSubmit={handleFormSubmit> 
          
            <div class="col-md-6 right">
                <div class="input-box">
                   <header>Login Here</header>
                   <div class="input-field">
                        <input type="text" class="input" id="email" required="" autocomplete="off"></input>
                        <label for="email">Email</label> 
                    </div> 
                   <div class="input-field">
                        <input type="password" class="input" id="pass" required=""></input>
                        <label for="pass">Password</label>
                    </div> 
                   <div class="input-field">
              
                        <input type="submit" class="submit" value="Login"></input>
                   </div> 
                   <div class="signin">
                    <span>Don't have an account? <a href="http://localhost:3000/signup">Sign up here</a></span>
                   </div>
                </div>  
            </div>
        </div>
    </div>
</div> 
  */}