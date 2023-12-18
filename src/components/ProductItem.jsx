import './ProductItem.css'

export const ProductItem = ({ thumbnail, title, price, product, id }) => {
    console.log({ thumbnail, title, price, product });
    return (
        <li className='product-item'>
            <div className='image-container-product-item'>
                <img src={ thumbnail } alt={ title } />
            </div>
            <div className='info-container-product-item'>
                <p>{ title }</p>
                <p>$ { price }</p>
            </div>
            <div className='button-container-product-item'>
                <button className='button-product-item'>Add to cart</button>
            </div>
        </li>
    )
}
