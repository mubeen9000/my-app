import React, { createContext, useState, useEffect } from 'react';

// Create Context
export const Contextstore = createContext();

// Create Provider Component
const Contextapi = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Pickup
  const [pickupLocation, setPickupLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');

  // Dropoff
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [dropoffDate, setDropoffDate] = useState('');
  const [dropoffTime, setDropoffTime] = useState('');
 
  // Fetch products from API
  const getdata = async () => {
    try {
      const res = await fetch('cars_with_reviews.json');
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
  
  return (
    <Contextstore.Provider value={{
      products,
      loading,
      error,
        // Pickup
        pickupLocation, setPickupLocation,
        pickupDate, setPickupDate,
        pickupTime, setPickupTime,
        // Dropoff
        dropoffLocation, setDropoffLocation,
        dropoffDate, setDropoffDate,
        dropoffTime, setDropoffTime,
    }}>
      {children}
    </Contextstore.Provider>
  );
};

export default Contextapi;
