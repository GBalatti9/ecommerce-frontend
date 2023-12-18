import { useCart } from "../hooks/useCart"
import { CartContext } from "./CartContext";



export const CartProvider = ({ children }) => {

    const { cart, addProductToCart, removeProductFromCart, clearCart, removeOneFromCart } = useCart();

    return (
        <>
        <CartContext.Provider value={{
            cart,
            addProductToCart,
            removeProductFromCart,
            clearCart,
            removeOneFromCart,
        }}>
            { children }
        </CartContext.Provider>
        </>
    )
}
