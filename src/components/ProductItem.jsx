import { useContext } from 'react'
import './ProductItem.css'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';

export const ProductItem = ({ thumbnail, title, price, product, id }) => {

    const { cart, addProductToCart, removeProductFromCart } = useContext( CartContext );

    const isInCart = ( product ) => {
        return cart.some(( item ) => item.id === product.id);
    }

    const handleButtonClick = ( e ) => {

        e.preventDefault();

        if (isInCart(product)) {
            removeProductFromCart(product);
        } else {
            addProductToCart(product);
        }
        
    }

    return (
        <Link to={`/product/${id}`} state={{ product }}>
        <li className='product-item'>
            <div className='image-container-product-item'>
                <img src={ thumbnail } alt={ title } />
            </div>
            <div className='info-container-product-item'>
                <p className='info-container-title'>{ title }</p>
                <p className='info-container-price'>$ { price }</p>
            </div>
            <div className='button-container-product-item'>
                <button 
                className={` ${isInCart(product) ? 'red' : 'blue'} button-product-item`}
                onClick={ handleButtonClick }
                    >
                        {
                            isInCart( product )
                            ? 'Remove from cart'
                            : 'Add to cart'
                        }
                        </button>
            </div>
        </li>
        </Link>
    )
}
