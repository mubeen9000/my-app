import React, { createContext, useState, useEffect } from 'react';

// Create Context
export const Contextstore = createContext();

// Create Provider Component
const Contextapi = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedCategory, setSelectedCategory] = useState('');

  // Cart state
  const [cartitems, setCartitems] = useState([]);

  // Search and filtered products
  const [search, setSearch] = useState('');
  const [filterproduct, setfilterproduct] = useState([]);

  // Fetch products from API
  const getdata = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    } catch (err) {
      console.error('Fetching error:', err);
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  useEffect(() => {
    const query = search.toLowerCase();

    setfilterproduct(
      products.filter(product =>
        product.title.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.price.toString().includes(query)
      )
    );

    console.log("filtered products",filterproduct);
    
  }, [products, search]);

  // Add to cart function
  const addtocart = (product) => {
    setCartitems(prev => {
      const exist = prev.find(item => item.id === product.id);
      if (exist) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  // Delete cart item function
  const deletecart = (productid) => {
    setCartitems(prev => prev.filter(item => item.id !== productid));
  };

  return (
    <Contextstore.Provider value={{
      products,
      loading,
      error,
      cartitems,
      addtocart,
      deletecart,
      search,
      setSearch,
      filterproduct,
  selectedCategory,
  setSelectedCategory
    }}>
      {children}
    </Contextstore.Provider>
  );
};

export default Contextapi;
