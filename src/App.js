import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Button, AppBar, Toolbar} from '@mui/material';

import LoginPage from './components/LoginPage'; 
import SignupPage from './components/SignupPage'; 
import HomePage from './components/HomePage'; 
import AddProductsPage from './components/AddProductsPage'; 
import ProductDetailsPage from './components/ProductDetailsPage'; 
import CreateOrderPage from './components/OrderPage';
import ConfirmationMessage from './components/ConfirmationMessage';
import "./App.css";

function App () {
  const isLoggedIn = true; // Example: Set it based on user authentication status
  const isAdmin = true; // Example: Set it based on user role

  return (
    <Router>
      <div>
        
        <Navbar isLoggedIn={isLoggedIn} isAdmin={isAdmin} />
        <Routes>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/signup"element={<SignupPage />}/>
          
        <Route exact path="/add-products" element={<AddProductsPage/>} />
          <Route path="/products/:id" element={<ProductDetailsPage/>}>
          </Route>
          <Route path="/create-order" exact element={<CreateOrderPage/>} />
        <Route path="/order-confirmed" exact element={<ConfirmationMessage/>} />
        
          {/* Add more routes as needed */}
          
        </Routes>
        
        <AppBar position="static"  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height:'100vh' }}>
             <Toolbar>
               <Button color="inherit" component={Link} to="/login">
                 Login
               </Button>
               <Button color="inherit" component={Link} to="/signup">
                 Sign Up
               </Button>
             </Toolbar>
           </AppBar>
       
      </div>
    </Router>
  );
};

export default App;
