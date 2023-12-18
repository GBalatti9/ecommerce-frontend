import './ProductItem.css'

export const ProductItem = () => {
    return (
        <li className='product-item'>
            <div className='image-container-product-item'>
                <img src="https://i.dummyjson.com/data/products/30/thumbnail.jpg" alt="Key holder" />
            </div>
            <div className='info-container-product-item'>
                <p>Key holder</p>
                <p>$ 30</p>
            </div>
            <div className='button-container-product-item'>
                <button className='button-product-item'>Add to cart</button>
            </div>
        </li>
    )
}
