import { useContext } from 'react'
import './ProductItem.css'
import { CartContext } from '../context/CartContext'

export const ProductItem = ({ thumbnail, title, price, product, id }) => {

    const { cart, addProductToCart, removeProductFromCart } = useContext( CartContext );

    const isInCart = ( product ) => {
        return cart.some(( item ) => item.id === product.id);
    }

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
                <button 
                    className='button-product-item'
                    onClick={() => 
                    isInCart( product ) 
                    ? removeProductFromCart( product )
                    : addProductToCart( product )}
                    >
                        {
                            isInCart( product )
                            ? 'Remove from cart'
                            : 'Add to cart'
                        }
                        </button>
            </div>
        </li>
    )
}
