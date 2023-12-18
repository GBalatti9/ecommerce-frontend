import { useState } from "react";
import { Filters } from "./Filters";
import { Menu } from "./Menu";
import { Title } from "./Title";

export const Header = ({ products }) => {
    const [ selectedCategory, setSelectedCategory ] = useState('all');

    const handleCategoryChange = ( category ) => {
        setSelectedCategory( category );
    }

    return (
        <div>
            <Title />
            <Menu products = { products } onCategoryChange = { handleCategoryChange }/>
            <Filters products = { products } selectedCategory = { selectedCategory } onCategoryChange = { handleCategoryChange }/>
        </div>
    )
}
