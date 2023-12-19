import { products as productsDb } from './database/products.json';
import { ProductList } from "./components/ProductList";
import { Header } from './components/Header';
import { FilterContext } from './context/FilterContext';
import { useContext } from 'react';
import { Cart } from './components/Cart';
import { CartProvider } from './context/CartProvider';
import { Route, Routes } from 'react-router-dom';
import { ProductDetail } from './components/ProductDetail';

export const Container = () => {
    const { filteredProducts } = useContext( FilterContext );

    const products = filteredProducts( productsDb );
    console.log({ products });

    return (
            <CartProvider>
                <Routes>
                    <Route path='/' element={
                        <>
                            <Header products={ productsDb } />
                            <ProductList products = { products } />
                            <Cart/>
                        </>
                    } />
                    <Route path='/product/:productId' element={ <ProductDetail /> }/>
                </Routes>
            </CartProvider>
    )
}
