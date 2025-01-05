import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa';
import '../Assets/css/AddToCart.css'

const CartAmountToggle = ({amount,setDecrease,setIncrease}) => {
  return (
    <div className='cart-button'>
      <div className='amount-toggle'>
        <button className='amount-toggle-btn' onClick={()=> setDecrease()}><FaMinus className='minus-btn'/></button>
        <div className='amount-style'>{amount}</div>
        <button className='amount-toggle-btn' onClick={()=> setIncrease()}><FaPlus className='plus-btn'/></button>
      </div>
    </div>
  )
}

export default CartAmountToggle
