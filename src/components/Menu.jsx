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
        <ul>
            {
                categories.map(( category, i ) => (
                    <li key={ category + i }>
                        <input 
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
