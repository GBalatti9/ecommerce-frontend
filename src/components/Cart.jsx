import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export const Cart = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleIsOpen = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div className={`cart-container ${isOpen ? 'open' : ''}`}>
            </div>
            <button className="cart-toggle-button" onClick={ toggleIsOpen }>
                <FontAwesomeIcon icon={ faCartShopping } />
            </button>

        </>
    )
}
