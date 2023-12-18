import './Filters.css';
import { useId } from "react";


export const Filters = ({ products }) => {

    const categories = [...new Set(products.map(( product ) => product.category))];
    const rangeId = useId();
    const categoryId = useId();

    return (
        <div className='filter-container'>
            <div className='filter-range'>
                <label htmlFor={ rangeId }>Price</label>
                <input type="range" name="minPrice" id={ rangeId } min="0" max="1000" className='input-price'/>
            </div>
            <div className='filter-category'>
                <label htmlFor={ categoryId }>Category</label>
                <select name="category" id={ categoryId } className='select-category'>
                    <option value="all">all</option>
                    {
                        categories.map(( category, i ) => (
                            <option value={ category } key={ category + i }>{ category }</option>
                        ))
                    }
                </select>
            </div>
        </div>
    )
}
