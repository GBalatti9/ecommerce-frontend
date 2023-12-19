import { useState } from "react";
import { Filters } from "./Filters";
import { Menu } from "./Menu";
import { Title } from "./Title";
import './Title.css';

export const Header = ({ products }) => {
    const [ selectedCategory, setSelectedCategory ] = useState('all');

    const handleCategoryChange = ( category ) => {
        setSelectedCategory( category );
    }

    return (
        <div>
            <div className='header-info-container'>
                <Title />
                <Menu products = { products } onCategoryChange = { handleCategoryChange }/>
            </div>
            <Filters products = { products } selectedCategory = { selectedCategory } onCategoryChange = { handleCategoryChange }/>
        </div>
    )
}
