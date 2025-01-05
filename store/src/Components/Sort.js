import React from 'react';
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../Context/FilterContext";

const Sort = () => {
    const { filter_products, grid_view, setGridView, setListView, sorting } =
        useFilterContext();
    return (
        <div className='sort-section'>
            {/* 1st column  */}
            < div className="sorting-list--grid" >  
            </div >
            {/* 2nd column  */}
            < div className="product-data" >
                <p>{`Available Products: ${filter_products.length}`}</p>
            </div >

            {/* 3rd column  */}
            < div className="sort-selection" >
                <form action="#">
                    <label htmlFor="sort"></label>
                    <select
                        name="sort"
                        id="sort"
                        className="sort-selection--style"
                        onClick={sorting}>
                        <option value="lowest">Price(lowest)</option>
                        <option value="#" disabled></option>
                        <option value="highest">Price(highest)</option>
                        <option value="#" disabled></option>
                        <option value="a-z">Price(a-z)</option>
                        <option value="#" disabled></option>
                        <option value="z-a">Price(z-a)</option>
                    </select>
                </form>
            </div >
        </div>
    )
}

export default Sort
