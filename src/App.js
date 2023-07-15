import React, { useState } from 'react';
import './App.css';
import { ReactComponent as Image } from './Abstraction.svg';
import { ReactComponent as Facebook } from './facebook.svg';
import { ReactComponent as Search } from './search.svg';




function App() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      // Form is valid, submit the data or perform further actions
      setSuccessMessage('Successfully created!');
      setFormData({
        email: '',
        name: '',
        password: '',
        confirmPassword: '',
      });
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    }

    if (!formData.name) {
      newErrors.name = 'Name is required';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    return newErrors;
  };

  return (
    <div className="App">
     
      <div className="left-section">
      <p className="obj" >Find 3D Objects, Mockups and Ilustration here</p><br></br><br></br><br></br>
      <Image className="Image" />
      </div>
      <div className="right-section">
        <h1 className="form-title">Create Account</h1>
        <div className="button-group">
          <button className="social-button">
            <Search  className="search" />
            <i className="fab fa-google"></i> Sign up with Google
          </button>
          <button className="social-button">
              <Facebook  className="Facebook" />
            <i className="fab fa-facebook"></i> Sign up with Facebook
          </button>
        </div>
        <p className="or">- OR -</p>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label"></label>
            <input
              className="form-input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
            />
            {errors.email && <span className="form-error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label className="form-label"></label>
            <input
              className="form-input"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
            />
            {errors.name && <span className="form-error">{errors.name}</span>}
          </div>
          <div className="form-group">
            <label className="form-label"></label>
            <input
              className="form-input"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
            />
            {errors.password && (
              <span className="form-error">{errors.password}</span>
            )}
          </div>
          <div className="form-group">
            <label className="form-label"></label>
            <input
              className="form-input"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
            />
            {errors.confirmPassword && (
              <span className="form-error">{errors.confirmPassword}</span>
            )}
          </div>
         
          <button className="form-button" type="submit">
            Create Account
          </button>
          {successMessage && (
        <div className="success-message">{successMessage}</div>
          )}
        </form>
      </div>
    </div>
  );
}

export default App;
