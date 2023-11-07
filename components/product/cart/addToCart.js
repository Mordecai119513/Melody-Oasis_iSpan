import React from 'react';

function AddToCartButton(props) {
  const { product, onAddToCart } = props;

  const handleAddToCart = () => {
    onAddToCart(product);
  };
  const addToCart = (product) => {
    // 商品添加到購物車
    setCart([...cart, product]);
  
    // 購物車內容存在localStorage
    const updatedCart = [...cart, product];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <button onClick={handleAddToCart}>
      購物車
    </button>
  );
}

export default AddToCartButton;