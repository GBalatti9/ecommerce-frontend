import './ProductItem.css'

export const ProductItem = ({ thumbnail, title, price, product, id }) => {

    return (
        <li className='product-item'>
            <div className='image-container-product-item'>
                <img src={ thumbnail } alt={ title } />
            </div>
            <div className='info-container-product-item'>
                <p>{ title }</p>
                <p className='info-container-price'>$ { price }</p>
            </div>
            <div className='button-container-product-item'>
                <button className='button-product-item'>Add to cart</button>
            </div>
        </li>
    )
}
