import { useCart } from "../hooks/useCart"
import { CartContext } from "./CartContext";



export const CartProvider = ({ children }) => {

    const { cart, addProductToCart, removeProductFromCart, clearCart } = useCart();

    return (
        <>
        <CartContext.Provider value={{
            cart,
            addProductToCart,
            removeProductFromCart,
            clearCart,
        }}>
            { children }
        </CartContext.Provider>
        </>
    )
}
