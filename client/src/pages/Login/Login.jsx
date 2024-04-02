import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import Auth from "../../utils/auth";
import { LOGIN } from "../../utils/mutations";
import './Login.css';



function Login(props) {
  // State to store form input values
  const [formState, setFormState] = useState({ firstName: '', lastName: '', email: '', password: '' });

  // Mutation hook to handle login mutation
  const [login, { error, loading }] = useMutation(LOGIN);

  const validateForm = () => {
    const { email, password, firstName, lastName } = formState;
    return email.length > 0 && password.length > 5 && firstName.length > 0 && lastName.length > 0;
  };
  
  // Function to handle form submission
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if(!formState.email || !formState.password) {
      console.error("Email and password are required");
      return;
    }
    try {
      // Call the login mutation with form input values
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });

      // Extract the token from the mutation response
      const token = mutationResponse.data.login.token;

      // Store the token in local storage using AuthS.login() method
      Auth.login(token);
      window.location.assign('/dashboard');
    } catch (e) {
      console.log(e);
    }
  };

  // Function to handle input changes
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
