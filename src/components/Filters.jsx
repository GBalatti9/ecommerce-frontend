import './Filters.css';
import { useId } from "react";


export const Filters = () => {

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
                    <option value="all">All</option>
                </select>
            </div>
        </div>
    )
}
