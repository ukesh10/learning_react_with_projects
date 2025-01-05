import React from 'react'
import { useProductContext } from '../Context/ProductContext'
import Product from './Product'
import '../Assets/css/FeatureProduct.css'

const FeatureProduct = () => {
    const {isLoading, featureProducts} = useProductContext();
    if(isLoading){
        return <div>...Loading</div>
    }
  return (
    <div className='feature-section'>   
        <div className='feature-check'>Check Now!</div>
        <div className='feature-header'>Our Feature Services</div>
        <div className='feature-products'>
            {
                featureProducts.map((curElem)=>{
                    return <Product key={curElem.id} {...curElem}/>
                })
            }
        </div>
    </div>
  )
}

export default FeatureProduct
