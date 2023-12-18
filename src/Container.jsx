import { products as productsDb } from './database/products.json';
import { ProductList } from "./components/ProductList";
import { Header } from './components/Header';
import { FilterContext } from './context/FilterContext';
import { useContext } from 'react';
import { Cart } from './components/Cart';
import { CartProvider } from './context/CartProvider';

export const Container = () => {
    const { filteredProducts } = useContext( FilterContext );

    const products = filteredProducts( productsDb );

    return (
        <CartProvider>
            <Header products={ productsDb } />
            <ProductList products = { products } />
            <Cart/>
        </CartProvider>
    )
}
