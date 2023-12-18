

export const cartReducer = ( state, action ) => {

    const { type, payload } = action;

    switch (type) {
        case 'ADD_TO_CART':
            const findProductIndex = state.findIndex(( item ) => item.id === payload.id);

            if( findProductIndex >= 0 ){
                const newState = structuredClone(state);
                newState[findProductIndex].quantity += 1;
                return newState;
            } else {
                return [
                    ...state, 
                    { 
                        ...payload,
                        quantity: 1 }
                    ]
            }
        case 'REMOVE_FROM_CART':
            return state.filter( ( item ) => item.id !== payload.id );
        
        case 'CLEAR_CART':
            return payload;
    
        default:
            break;
    }
}
