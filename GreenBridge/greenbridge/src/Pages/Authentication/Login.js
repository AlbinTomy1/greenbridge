import React, { useState, useEffect } from "react";
import google from '../../assets/Google.png';
import logo from '../../assets/logo.png';
import '../../Login.css';
import axios from "axios";

const Login = ({ setIslogin }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);

  // Reset email and password fields when the component is loaded
  useEffect(() => {
    setEmail('');
    setPassword('');
  }, []);

  // Email validation function
  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    // Validate email using a regular expression
    const emailRegex = /\S+@\S+\.\S+/;
    setIsEmailValid(emailRegex.test(inputEmail));
  };

  // Form submission handling
  const formSubmit = async (e) => {
    e.preventDefault();

    // Validate that both fields are filled
    if (!email || !password) {
      setError('All fields are required!');
      return;
    } else {
      setError('');
    }

    try {
      const response = await axios.post('http://localhost:8000/api/v1/auth/login/', {
        email,
        password,
      });
      localStorage.setItem('token', response.data.access);
      console.log('User logged in:', response.data);
    } catch (error) {
      console.error('Error logging in:', error);
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="login-right">
      <div className="brand">
        <div className="logo-container">
          <img src={logo} alt="Brand Logo" className="brand-logo" />
        </div>
        <h2 className="brand-name">GREENBRIDGE</h2>
      </div>

      <h2>Login</h2>
      <form onSubmit={formSubmit}>
        {/* Email input */}
        <div className="input-group">
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="E-mail"
            value={email}
            onChange={handleEmailChange}
            autoComplete="off"
          />
        </div>

        {/* Password input */}
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={!isEmailValid} // Disable password input until email is valid
            autoComplete="new-password"
          />
          <a href="#" className="forgot-password">
            Forgot Password? <strong>Click Here</strong>
          </a>
        </div>

        {/* Error message */}
        {error && <p className="form-error">{error}</p>}

        {/* Submit button */}
        <button
          type="submit"
          className="login-btn"
          disabled={!isEmailValid || password === ''} // Disable button if email is invalid or password is empty
        >
          Sign In
        </button>

        <div className="or-divider">or</div>

        {/* Google login button */}
        <button type="button" className="google-btn">
          <img src={google} alt="Google Logo" />
        </button>
      </form>

      <div className="sign-up-link">
        <p>
          <a href="#" onClick={() => setIslogin(false)}>New User? Create Account</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
