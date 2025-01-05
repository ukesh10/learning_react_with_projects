import React from 'react';
import { useFilterContext } from "../Context/FilterContext";
import GridView from "./GridView";

const ProductList = () => {
  const { filter_products, grid_view } = useFilterContext();

  if (grid_view === true) {
    return <GridView products={filter_products} />;
  }
  return (
    <div className='products-list'>
      
    </div>
  )
}

export default ProductList
