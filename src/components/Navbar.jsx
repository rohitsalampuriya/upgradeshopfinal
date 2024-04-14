
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import AddProductsPage from './AddProductsPage';
const Navbar = ({ isLoggedIn, isAdmin }) => {
  return (
   
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <ShoppingCart /> 
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          upGrad Eshop
        </Typography>
        {isLoggedIn ? (
          <>
            {/* Search bar */}
            <input type="text" placeholder="Search..." style={{ marginRight: '10px' }} />
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none', marginRight: '10px' }}>Home</Link>
            <Link to="/logout" style={{ color: 'inherit', textDecoration: 'none', marginRight: '10px' }}>Logout</Link>
            
              <Button to="/add-products" component={Link}  style={{ color: 'inherit', textDecoration: 'none' }}>Add Products</Button>
            
          </>
        ) : ( // If user is not logged in
          <>
            <Link to="/login" style={{ color: 'inherit', textDecoration: 'none', marginRight: '10px' }}>Login</Link>
            <Link to="/signup" style={{ color: 'inherit', textDecoration: 'none' }}>Sign Up</Link>
          </>
        )}

      </Toolbar>
     
    </AppBar>
  
    
  );
};

export default Navbar;
