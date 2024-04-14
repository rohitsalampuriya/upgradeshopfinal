import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { TextField, CardContent, Typography, Card } from '@mui/material';

function ProductDetailsPage() {
  const { id } = useParams(); // Get the product ID from the URL params
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetchProductDetails();
  }, []);

  const fetchProductDetails = async () => {
    try {
      const response = await fetch(`/products/${id}`);
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  };

  const handleQuantityChange = (event) => {
    // Ensure quantity is a positive integer
    const newQuantity = parseInt(event.target.value);
    if (!isNaN(newQuantity) && newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div>
      {product ? (
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              {product.name}
            </Typography>
            <img src={product.image} alt={product.name} style={{ maxWidth: '100%' }} />
            <Typography color="textSecondary">
              Price: ${product.price}
            </Typography>
            <Typography variant="body2" component="p">
              {product.description}
            </Typography>
            <TextField
              type="number"
              label="Quantity"
              value={quantity}
              onChange={handleQuantityChange}
              InputProps={{ inputProps: { min: 1 } }}
              fullWidth
            />
            <button onClick={() => console.log(`Buy ${quantity} ${product.name}`)}>
              Buy
            </button>
          </CardContent>
        </Card>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ProductDetailsPage;
