import React, { useReducer, useContext, createContext, useEffect, useState } from 'react';

const orderContext = createContext(null);

export const useOrder = () => useContext(orderContext);

export const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState({
    totalAmount: '',
    coupon: '',
    finalAmount: '',
    payment: '',
    ship: ''
  });


  return (
    <orderContext.Provider value={{ order, setOrder }}>
      {children}
    </orderContext.Provider>
  );
};

export default OrderProvider;
