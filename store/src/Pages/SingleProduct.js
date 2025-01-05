import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProductContext } from '../Context/ProductContext';
import PageNavigation from '../Components/PageNavigation';
import MyImage from '../Components/MyImage';
import FormatPrice from '../Helpers/FormatPrice';
import Star from '../Components/Star';
import '../Assets/css/SingleProduct.css'
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import AddToCart from '../Components/AddToCart';

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext();
  const { id } = useParams();
  const {
    id: alias,
    name,
    company,
    price,
    description,
    category,
    stock,
    reviews,
    stars,
    image,
  } = singleProduct;
  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);
  if(isSingleLoading){
    return <div>Loading...</div>
  }
  return (
    <div>
      <PageNavigation title={name}/>
      <div className='single-container'>
      
          <div>
          <MyImage imgs={image} />
          </div>
          <div className='product-data'>
            <h2>{name}</h2>
            <Star stars={stars} reviews={reviews}/>
            <p className='product-data-price'>
              MRP:
              <del><FormatPrice price={price + 250000}/></del>
            </p>
            <p className='product-data-real-price'>
              Deal of the Day: <FormatPrice price={price}/>
            </p>
            <p>{description}</p>
            <div className='product-data-warranty'>
            <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" size={25}/>
                <p className='warranty-paragraph'>Free Delivery</p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" size={25}/>
                <p className='warranty-paragraph'>30 Days Replacement</p>
              </div>

              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" size={25} />
                <p className='warranty-paragraph'>Sharma Delivered </p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" size={25} />
                <p className='warranty-paragraph'>2 Years Warranty </p>
              </div>
            </div>
            <div className="product-data-info">
              <hr className='horizontal-line'/>
              <p>
                Available:
                <span> {stock > 0 ? "In stock" : "Not Available"}</span>
              </p>
              <p>
                ID : <span> {id} </span>
              </p>
              <p>
                Brand :<span> {company} </span>
              </p>
              <hr className='horizontal-line-bottom'/>
            </div>
            {stock > 0 && <AddToCart product={singleProduct} />}
          </div>
      </div>
    </div>
  )
}

export default SingleProduct
