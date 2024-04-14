import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, Grid } from '@mui/material';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
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
    console.log('Signup form submitted:', formData);
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Signup
            </Button>
          </Grid>
        </Grid>
      </form>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
};

export default SignupPage;
