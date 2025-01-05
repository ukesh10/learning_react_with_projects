import React from 'react';
import Product from "./Product";
import '../Assets/css/GridView.css'

const GridView = ({ products }) => {
  return (
       <div className="feature-section">
      <div className="feature-products">
       {products.map((curElem) => {
          return(<Product key={curElem.id} {...curElem} /> ) ;
        })}
       
      </div>
    </div>
  )
}

export default GridView
