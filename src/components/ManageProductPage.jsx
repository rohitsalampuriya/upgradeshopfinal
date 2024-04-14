
import React, { useState, useEffect } from 'react';
import { Card, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { deleteProduct } from '../api/products'; 
function ManageProductsPage() {
  const [products, setProducts] = useState([]);
  const [deleteProductId, setDeleteProductId] = useState(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  useEffect(() => {
    
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
   
  };

  const handleDeleteClick = (productId) => {
    setDeleteProductId(productId);
    setIsDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = async () => {
    try {

      await deleteProduct(deleteProductId);
  
    } catch (error) {
      console.error('Error deleting product:', error);

    } finally {
      setIsDeleteDialogOpen(false);
    }
  };

  return (
    <div>
   
      {products.map((product) => (
        <Card key={product.id}>
          <h2>{product.name}</h2>
          <p>Price: {product.price}</p>
        
          <Button onClick={() => handleDeleteClick(product.id)}>Delete</Button>
          
        </Card>
      ))}

      <Dialog open={isDeleteDialogOpen} onClose={() => setIsDeleteDialogOpen(false)}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this product?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsDeleteDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleDeleteConfirm}>Delete</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ManageProductsPage;
