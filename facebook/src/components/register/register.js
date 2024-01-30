// Import necessary dependencies
import React, { useState } from 'react';
import axios from 'axios';
import './register.css';

function Register({ onClose }) {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    birthday_day: 'Day',
    birthday_month: 'Month',
    birthday_year: 'Year',
    gender: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const register = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/signup/', formData);

      console.log(response.data);

      window.alert('Registration successful!');
      onClose();  // Close the registration popup after successful registration
    } catch (error) {
      console.error(error);
      window.alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className="registerPopup">
      {/* Content of the registration popup */}
      <h2>Create New Account</h2>
      <form onSubmit={register}>
        <input
          onChange={handleChange}
          name='first_name'
          className='register__name'
          type='name'
          placeholder='Firstname'
        />
        <input
          onChange={handleChange}
          name='last_name'
          className='register__name'
          type='name'
          placeholder='Last Name'
        />
        <input
          onChange={handleChange}
          name='email'
          type='email'
          placeholder='Email'
        />
        <input
          onChange={handleChange}
          name='password'
          type='password'
          placeholder='New password'
        />
        <h5 className='register__date'>Date of Birth</h5>
        <div className='row'>
          {/* Day */}
          <select className='register_date2' onChange={(e) => handleDateChange('birthday_day', e.target.value)}>
            <option value="Day">Day</option>
            {Array.from({ length: 31 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>

          {/* Month */}
          <select className='register_date2' onChange={(e) => handleDateChange('birthday_month', e.target.value)}>
            <option value="Month">Month</option>
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>

          {/* Year */}
          <select className='register_date2' onChange={(e) => handleDateChange('birthday_year', e.target.value)}>
            <option value="Year">Year</option>
            {Array.from({ length: 50 }, (_, i) => (
              <option key={i + 1970} value={i + 1970}>
                {i + 1970}
              </option>
            ))}
          </select>
        </div>
        <h5 className='register_gender'>Gender</h5>
        <div className='register__radiocontainer'>
          <label>Female</label>
          <input onChange={handleChange} type='radio' name='gender' value="Female" />
        </div>
        <div className='register__radiocontainer'>
          <label>Male</label>
          <input onChange={handleChange} type='radio' name='gender' value="Male" />
        </div>
        <div className='register__radiocontainer'>
          <label>Other</label>
          <input onChange={handleChange} type='radio' name='gender' value="Other" />
        </div>
        <p className='register__policy'>
          By clicking Sign Up, you agree to your {""}
          <span>Terms, Data privacy</span>and <span>Cookie Policy</span>
          may receive SMS notifications from us and can opt out at any time
        </p>
        <center>
          <button type='submit' className='register__register'>
            Sign Up
          </button>
        </center>
      </form>
      <center>
        <p className='register__login' onClick={onClose}>
          Already have an account?
        </p>
      </center>
    </div>
  );
}

export default Register;
