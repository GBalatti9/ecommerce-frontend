import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useState } from "react";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartProducts } from './CartProducts';
import { CartContext } from '../context/CartContext';

export const Cart = () => {
    
    const { cart } = useContext( CartContext );

    const [isOpen, setIsOpen] = useState(false);

    const toggleIsOpen = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div className={`cart-container ${isOpen ? 'open' : ''}`}>
                <CartProducts />
            </div>
            <div className="cart-toggle-button-container">
                <button className="cart-toggle-button" onClick={toggleIsOpen}>
                    <FontAwesomeIcon icon={ faCartShopping } className='bg-color-fontawesome-cart'/>
                </button>
                {cart.length > 0 && (
                    <div className="cart-item-count">
                        {cart.length}
                    </div>
                )}
            </div>
        </>
    )
}
