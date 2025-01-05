import React from 'react'
import FilterSection from '../Components/FilterSection'
import ProductList from '../Components/ProductList'
import Sort from '../Components/Sort';
import '../Assets/css/Products.css'

const Products = () => {
  return (
    <div className="products-container">
        <div className='filter-section'>
          <FilterSection />
        </div>

        <section className="sort-section">
          <div className="sort-filter">
            <Sort />
          </div>
          <div className="main-product">
            <ProductList />
          </div>
        </section>
      </div>
  )
}

export default Products
