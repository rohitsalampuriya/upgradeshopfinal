// Mock data for categories
const mockCategories = [
    { id: 1, name: 'Electronics' },
    { id: 2, name: 'Clothing' },
    { id: 3, name: 'Books' },
  ];
  
  // Mock data for products
  const mockProducts = [
    { id: 1, name: 'Laptop', price: 999, categoryId: 1 },
    { id: 2, name: 'T-shirt', price: 20, categoryId: 2 },
    { id: 3, name: 'Book', price: 15, categoryId: 3 },
  ];
  
  // Simulated asynchronous fetch functions
  const fetchCategories = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockCategories);
      }, 1000); // Simulate 1 second delay
    });
  };
  
  const fetchProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockProducts);
      }, 1000); // Simulate 1 second delay
    });
  };
  
  export { fetchCategories, fetchProducts };
  