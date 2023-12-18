import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { CartItem } from "./CartItem";
import './CartProducts.css';


export const CartProducts = () => {

    const { cart } = useContext(CartContext);

    return (
        <>
            <ul className='cart-products-container'>
                {
                    cart.map((element, i) => (
                        <CartItem 
                            {...element}
                            product = { element }
                            key={ element + i }/>
                    ))
                }
            </ul>
        </>
    )
}
