import { FilterContext } from '../context/FilterContext';
import { useFilters } from '../hooks/useFilters';
import './Filters.css';
import { useContext, useId } from "react";


export const Filters = ({ products, selectedCategory, onCategoryChange }) => {

    const { filters, updateFilter } = useContext( FilterContext );

    const categories = [...new Set(products.map(( product ) => product.category))];

    const rangeId = useId();
    const categoryId = useId();

    const handleChange = ({ target }) => {
        const { name, value } = target;
        updateFilter( name, value );
        if (name === 'category') {
            onCategoryChange( value );
        }
    }

    return (
        <div className='filter-container'>
            <div className='filter-range'>
                <label htmlFor={ rangeId }>Price</label>
                <input 
                    type="range" 
                    name="minPrice" 
                    id={ rangeId }
                    value={ filters.minPrice }
                    min="0" 
                    max="1000" 
                    className='input-price' 
                    onChange={ handleChange }
                />
                <span>{ filters.minPrice }</span>
            </div>
            <div className='filter-category'>
                <label htmlFor={ categoryId }>Category</label>
                <select 
                    name="category"
                    id={ categoryId } 
                    className='select-category'
                    onChange={ handleChange } 
                    value={ selectedCategory } >

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
