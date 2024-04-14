import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, Typography } from '@mui/material';


const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement login functionality here, e.g., make API call
    console.log('Login form submitted:', formData);
  };
const spacing = 1;
  return (
    <div>
      <Typography variant="h2" gutterBottom>Login</Typography>
      <form onSubmit={handleSubmit} >
        <div style={{marginBottom: spacing + 'em'}}>
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
          />
        </div>
        <div>
          <TextField
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            type="password"
            fullWidth
          />
        </div>
        <Button type="submit" variant="contained" color="primary">Login</Button>
      </form>
      <Typography variant="body1">
        Don't have an account? <Link to="/signup">Signup</Link>
      </Typography>
    </div>
  );
};

export default LoginPage;
