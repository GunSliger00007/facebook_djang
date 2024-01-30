// Import necessary dependencies
import React, { useState } from "react";
import axios from 'axios';
import "./loginpage.scss";  // Import styles for the login page
import FacebookTextLogo from "../../asssets/facebooktextlogo.svg";  // Import Facebook logo
import UserImage from "../../asssets/createStoryUserImage.jpg";  // Import user image placeholder
import { GrFormClose } from "react-icons/gr";  // Import close icon
import { FaPlus, FaEye, FaEyeSlash } from "react-icons/fa";  // Import plus, eye, and eye-slash icons
import Register from "../register/register"; // Import the Register component

// Define the Login component
export default function Login({ onLogin }) {
  // Define state variables for email, password, and showPassword
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [showRegisterPopup, setShowRegisterPopup] = useState(false);

  // Handle input change for email and password fields
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'password') setPassword(value);
    if (name === 'email') setEmail(value);
    setShowPassword(!!value);  // Show password button if there is a value
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Handle login button click
  const handleLoginClick = async () => {
    try {
      // Prepare form data with email and password
      const formData = { email, password };

      // Make a POST request to the login API endpoint
      const response = await axios.post('http://localhost:8000/api/login/', formData);

      // Extract access and refresh tokens from the response
      const { access, refresh } = response.data;

      // Store tokens in localStorage for future use
      localStorage.setItem('accessToken', access);
      localStorage.setItem('refreshToken', refresh);

      // Set Authorization header for future Axios requests
      axios.defaults.headers.common['Authorization'] = `Bearer ${access}`;

      console.log(response.data);

      // Show a success alert
      window.alert('Login successful!');
      
      // Call the onLogin function from the parent component
      onLogin();

      // If you want to redirect, you can use window.location.href
      // window.location.href = "/Facebook";
    } catch (error) {
      // Log any errors to the console and show an error alert
      console.error(error);
      window.alert('Login failed. Please check your credentials and try again.');
    }
  };

  // Function to toggle the visibility of the registration popup
  const toggleRegisterPopup = () => {
    setShowRegisterPopup(!showRegisterPopup);
  };

  // Render the Login component
  return (
    <div className="loginWrapper">
      <div className="logInContainerWrapper">
        <div className="logInContainer">
          {/* Left side section with Facebook logo, recent logins, and user accounts */}
          <div className="leftSideLogInSection">
            <div className="textLogo">
              <img src={FacebookTextLogo} alt="Facebook Logo" />
            </div>
            <div className="logInTexts">
              <h2>Recent Logins</h2>
              <p>Click your picture or add an account.</p>
            </div>
            <div className="userAccountsWrapper">
              {/* User accounts list */}
              <ul>
                <li>
                  <a href="#">
                    <div className="accountCard1">
                      <div className="userImage">
                        <img src={UserImage} alt="User" />
                      </div>
                      <div className="notificationCounter">
                        <span>
                          <p>5</p>
                        </span>
                      </div>
                      <div className="closeBtn">
                        <i>
                          <GrFormClose />
                        </i>
                      </div>
                      <div className="cardBottomText">
                        <p>Ani</p>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="addaccount">
                      <div className="plusIcon">
                        <i>
                          <FaPlus />
                        </i>
                      </div>
                      <div className="cardBottomText">
                        <p>Add account</p>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Right side section with login form */}
          <div className="rightSideLogInSection">
            <div className="logInforms">
              {/* Email input field */}
              <div className="emailInput">
                <input
                  className="logInInputs"
                  type="text"
                  placeholder="Email or phone number"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                />
              </div>
              {/* Password input field with show/hide password button */}
              <div className="passwordInput">
                <input
                  className="logInInputs"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={handleInputChange}
                />
                {password && (
                  <button onClick={togglePasswordVisibility}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                )}
              </div>
              {/* Login button */}
              <div className="logInBtn">
                <button onClick={handleLoginClick}>Log In</button>
              </div>
              {/* Forgot password link */}
              <div className="forgotPassword">
                <button>Forgot password?</button>
              </div>
              {/* Divider */}
              <div className="logIndivider"></div>
              {/* Create new account link */}
              <div className="createNewAccount">
                <button onClick={toggleRegisterPopup}>Create new account</button>
              </div>
            </div>
            {/* Create page section */}
            <div className="createPage">
              <p>
                <a href="#">Create a page </a>for a celebrity, brand, or business.
              </p>
            </div>
          </div>
        </div>
        {/* Footer section */}
        <div className="logInFotter"></div>
      </div>

      {/* Render the Register popup if showRegisterPopup is true */}
      {showRegisterPopup && <Register onClose={toggleRegisterPopup} />}
    </div>
  );
}


