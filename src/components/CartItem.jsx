import { useContext } from 'react';
import './CartItem.css';
import { CartContext } from '../context/CartContext';

export const CartItem = ({ thumbnail, title, price, quantity, product }) => {

    const { addProductToCart, removeOneFromCart } = useContext( CartContext );

    return (
        <li className='cart-item-li'>
            <div className='image-container-cart-item'>
                <img src={thumbnail} alt={title} />
            </div>
            <div className='info-container-cart-item'>
                <p>{title}</p>
                <p className='info-container-cart-price'>$ {price}</p>
            </div>
            <div className='buttons-quantity'>
                <button
                className='button-remove-one'
                onClick={() => removeOneFromCart( product )}>
                    -
                </button>
                {quantity}
                <button 
                className='button-add-one'
                onClick={() => addProductToCart( product )}>+</button>
            </div>
        </li>
    )
}
