import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    // <div className="container my-1">
    //   <Link to="/login">← Go to Login</Link>

    //   <h2>Signup</h2>
    //   <form onSubmit={handleFormSubmit}>
    //     <div className="flex-row space-between my-2">
    //       <label htmlFor="firstName">First Name:</label>
    //       <input
    //         placeholder="First"
    //         name="firstName"
    //         type="firstName"
    //         id="firstName"
    //         onChange={handleChange}
    //       />
    //     </div>
    //     <div className="flex-row space-between my-2">
    //       <label htmlFor="lastName">Last Name:</label>
    //       <input
    //         placeholder="Last"
    //         name="lastName"
    //         type="lastName"
    //         id="lastName"
    //         onChange={handleChange}
    //       />
    //     </div>
    //     <div className="flex-row space-between my-2">
    //       <label htmlFor="email">Email:</label>
    //       <input
    //         placeholder="youremail@test.com"
    //         name="email"
    //         type="email"
    //         id="email"
    //         onChange={handleChange}
    //       />
    //     </div>
    //     <div className="flex-row space-between my-2">
    //       <label htmlFor="pwd">Password:</label>
    //       <input
    //         placeholder="******"
    //         name="password"
    //         type="password"
    //         id="pwd"
    //         onChange={handleChange}
    //       />
    //     </div>
    //     <div className="flex-row flex-end">
    //       <button type="submit">Submit</button>
    //     </div>
    //   </form>
    // </div>

    <div class="wrapper">
    <div class="container main">
        <div class="row">
            <div class="col-md-6 side-image">  
                <img src="/images/debateroom.png" alt=""></img>
                <div class="text">
                    <p>Join the community of debaters</p>
                </div>
            </div>
            <div class="col-md-6 right">
                <div class="input-box">
                   <header>Create an account</header>
                   <div class="input-field">
                        <input type="firstname" class="input" id="firstname" required="" autocomplete="off"></input>
                        <label for="email">Firstname</label> 
                    </div> 
                   <div class="input-field">
                        <input type="lastname" class="input" id="lastname" required=""></input>
                        <label for="lastname">Lastname</label>
                    </div> 
                    <div class="input-field">
                        <input type="email" class="input" id="email" required=""></input>
                        <label for="email">Email</label>
                    </div> 
                    <div class="input-field">
                        <input type="password" class="input" id="pass" required=""></input>
                        <label for="pass">Password</label>
                    </div> 
                   <div class="input-field">
                        <input type="submit" class="submit" value="Sign Up"></input>
                   </div> 
                   <div class="signin">
                    <span>Already have an account? <a href="http://localhost:3000/login">Log in here</a></span>
                   </div>
                </div>  
            </div>
        </div>
    </div>
</div>
  );
}

export default Signup;
