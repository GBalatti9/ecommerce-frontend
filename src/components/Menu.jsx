import './Menu.css';
import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";

export const Menu = ({ products, onCategoryChange }) => {

    const categories = [...new Set(products.map(( product ) => product.category))];

    const { updateFilter } = useContext( FilterContext );

    const handleChange = ( category ) => {
        updateFilter( 'category', category );
        onCategoryChange( category );
    }

    return (
        <ul className='menu-button-container'>
            <li>
                <input 
                    type="submit" 
                    value='All' 
                    className='menu-button' 
                    name='category' 
                    onClick={() => handleChange( 'all' )}/>
            </li>
            {
                categories.map(( category, i ) => (
                    <li key={ category + i }>
                        
                        <input
                            className='menu-button'
                            type="submit" 
                            value={ category.charAt(0).toUpperCase() + category.slice(1).toLowerCase() } 
                            name="category"
                            onClick={() => handleChange( category ) }
                            />
                    </li>
                ))
            }
        </ul>
    )
}
