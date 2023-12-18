import { products } from './database/products.json';
import { ProductList } from "./components/ProductList";

export const Container = () => {
    return (
        <>
        <ProductList products = { products } />
        </>
    )
}
