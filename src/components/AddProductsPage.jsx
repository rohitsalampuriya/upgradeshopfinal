import React, { useState, useEffect } from 'react';
import { useNavigate, Link} from 'react-router-dom';
import {Card, Button}from '@mui/material';
import { fetchCategories, fetchProducts } from './mockData';

function AddProductsPage() {
  const [user, setUser] = useState(null);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState('default');
  const navigate  = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const loggedInUser = localStorage.getItem('user');
    if (!loggedInUser) {
        navigate('/login'); // Redirect to login if not logged in
    } else {
      setUser(JSON.parse(loggedInUser));
    }

    // Fetch categories
    fetchCategories().then((data) => setCategories(data));;

    // Fetch products
    fetchProducts().then((data) => setProducts(data));;
  }, [navigate]);

//   const fetchCategories = async () => {
//     try {
//       const response = await fetch('/products/categories');
//       const data = await response.json();
//       setCategories(data);
//     } catch (error) {
//       console.error('Error fetching categories:', error);
//     }
//   };

//   const fetchProducts = async () => {
//     try {
//       const response = await fetch('/products');
//       const data = await response.json();
//       setProducts(data);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };

  const handleSortChange = (event, newSortBy) => {
    setSortBy(newSortBy);
   
    let sortedProducts = [...products];
    switch (newSortBy) {
      case 'priceHighToLow':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case 'priceLowToHigh':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'newest':
        sortedProducts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
      default:
       
        break;
    }
    setProducts(sortedProducts);
  };

  return (
    <div>
      <h1>Welcome, {user && user.name}</h1>
      <div>
        Sort by:
        <Button value="default" selected={sortBy === 'default'} onChange={handleSortChange}>
          Default
        </Button>
        <Button value="priceHighToLow" selected={sortBy === 'priceHighToLow'} onChange={handleSortChange}>
          Price High to Low
        </Button>
        <Button value="priceLowToHigh" selected={sortBy === 'priceLowToHigh'} onChange={handleSortChange}>
          Price Low to High
        </Button>
        <Button value="newest" selected={sortBy === 'newest'} onChange={handleSortChange}>
          Newest
        </Button>
      </div>
      <div>
        {categories.map(category => (
          <Button key={category.id} value={category.id}>
            {category.name}
          </Button>
        ))}
      </div>
      <div>
        {products.map(product => (
          <Card key={product.id}>
            <h2>{product.name}</h2>
            <p>Price: {product.price}</p>
            {/* Additional product details */}
            <Link to={`/products/${product.id}`}> {/* Link to the product details page */}
              <button>Buy</button>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default AddProductsPage;
