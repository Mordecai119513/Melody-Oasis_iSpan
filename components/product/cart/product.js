import React, { useState } from 'react';
import { FaRegTrashCan } from "react-icons/fa6";
export default function Product({ product, price, totalAmount, onUpdateTotal }) {
  const [quantity, setQuantity] = useState(1);
  const [isSelected, setIsSelected] = useState(false);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const subtotal = price * quantity;

  const toggleSelection = () => {
    setIsSelected(!isSelected);
    updateTotal(isSelected ? -subtotal : subtotal);
  };

  // 更新总计金额的函数
  const updateTotal = (amount) => {
    onUpdateTotal(amount);
  };

  

  return (
    <div className='productContainer'>
      <input
        type="checkbox"
        checked={isSelected}
        onChange={toggleSelection} // 在核取方框状态变化时调用toggleSelection函数
      />
      <div>picture</div>
      <div className='productName'>{product.name}</div>
      <div>{price}</div>
      <div className='plus'>
        <button className='btn' onClick={decreaseQuantity}>-</button>
        {quantity}
        <button className='btn' onClick={increaseQuantity}>+</button>
      </div>
      <div>total: {subtotal }</div>
      <button><FaRegTrashCan/></button>
    </div>
  );
}