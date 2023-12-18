import { products } from './database/products.json';
import { ProductList } from "./components/ProductList";
import { Header } from './components/Header';

export const Container = () => {
    return (
        <>
        <Header products={ products } />
        <ProductList products = { products } />
        </>
    )
}
