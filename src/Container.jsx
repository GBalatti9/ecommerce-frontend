import { products as productsDb } from './database/products.json';
import { ProductList } from "./components/ProductList";
import { Header } from './components/Header';
import { useFilters } from './hooks/useFilters';
import { FilterContext } from './context/FilterContext';
import { useContext } from 'react';
import { Cart } from './components/Cart';

export const Container = () => {
    const { filteredProducts } = useContext( FilterContext );

    const products = filteredProducts( productsDb );
    console.log({ products });

    return (
        <>
        <Header products={ productsDb } />
        <ProductList products = { products } />
        <Cart/>
        </>
    )
}
