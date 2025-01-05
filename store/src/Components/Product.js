import React from 'react'
import { NavLink } from 'react-router-dom';
import FormatPrice from '../Helpers/FormatPrice';
import '../Assets/css/FeatureProduct.css'

const Product = (curElem) => {
  const {id, name, image, price, category} = curElem;
  return (
    <>
    <NavLink className='feature-border' to={`/singleproduct/${id}`}>
        <img className='feature-image' src={image} alt={name}/>
        <figcaption className='caption'>{category}</figcaption>
      <div>
        <div className='feature-details'>
          <h3>{name}</h3>
          <p className='feature-price'><FormatPrice price={price}/></p>
        </div>
      </div>
    </NavLink>
    </>
  )
}

export default Product
