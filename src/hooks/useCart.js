import { useReducer, useState } from "react";
import { cartReducer } from "../reducer/cartReducer";

const ACTIONS = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    REMOVE_ONE_FROM_CART: 'REMOVE_ONE_FROM_CART',
    CLEAR_CART: 'CLEAR_CART'
}

const initialState = [];

export const useCart = () => {

    const [ cart, dispatch ] = useReducer( cartReducer, initialState );

    const addProductToCart = ( product ) => {
        dispatch({
            type: ACTIONS.ADD_TO_CART,
            payload: product,
        })
    }

    const removeProductFromCart = ( product ) => {
        dispatch({
            type: ACTIONS.REMOVE_FROM_CART,
            payload: product,
        })
    }

    const clearCart = () => {
        dispatch({
            type: ACTIONS.CLEAR_CART,
            payload: [],
        })
    }

    const removeOneFromCart = ( product ) => {
        dispatch({
            type: ACTIONS.REMOVE_ONE_FROM_CART,
            payload: product,
        })
    }

    console.log({ cart });
    return {
        cart,
        addProductToCart,
        removeProductFromCart,
        removeOneFromCart,
        clearCart,
    }

}
