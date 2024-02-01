import React, { useState } from "react";
import axios from 'axios';
import "./loginpage.scss";
import FacebookTextLogo from "../../asssets/facebooktextlogo.svg";
import UserImage from "../../asssets/createStoryUserImage.jpg";
import { GrFormClose } from "react-icons/gr";
import { FaPlus, FaEye, FaEyeSlash } from "react-icons/fa";
import Register from "../register/register";

export default function Login({ onLogin }) {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [showRegisterPopup, setShowRegisterPopup] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'password') setPassword(value);
    if (name === 'email') setEmail(value);
    setShowPassword(!!value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLoginClick = async () => {
    try {
      const formData = { email, password };
      const response = await axios.post('https://backend-kdb3.onrender.com/api/login/', formData);

      const { access, refresh } = response.data;
      localStorage.setItem('accessToken', access);
      localStorage.setItem('refreshToken', refresh);

      axios.defaults.headers.common['Authorization'] = `Bearer ${access}`;

      console.log(response.data);
      window.alert('Login successful!');
      
      onLogin();
    } catch (error) {
      console.error(error);
      window.alert('Login failed. Please check your credentials and try again.');
    }
  };

  const toggleRegisterPopup = () => {
    setShowRegisterPopup(!showRegisterPopup);
  };

  // Handle Enter key press
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleLoginClick();
    }
  };

  // Add event listener for Enter key press
  React.useEffect(() => {
    document.addEventListener('keypress', handleKeyPress);
    return () => {
      document.removeEventListener('keypress', handleKeyPress);
    };
  }, [email, password]);

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


