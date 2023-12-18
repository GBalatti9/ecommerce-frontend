import './ProductItem.css'

export const ProductItem = () => {
    return (
        <li className='product-item'>
            <div className='image-container-product-item'>
                <img src="https://i.dummyjson.com/data/products/30/thumbnail.jpg" alt="Key holder" />
            </div>
            <div className='info-container-product-item'>
                <h3>Key holder</h3>
                <h4>$ 30</h4>
            </div>
            <div className='button-container-product-item'>
                <button className='button-product-item'>Add to cart</button>
            </div>
        </li>
    )
}
