import './ProductList.css';
import { ProductItem } from "./ProductItem";

export const ProductList = ({ products }) => {
    return (
        <>
        <ul className='product-list-container'>
            {
                products.map(( product ) => (
                    <ProductItem 
                        key={ product.id }
                        product = { product }
                        { ...product }
                    />
                ))
            }
        </ul>
        </>
    )
}
