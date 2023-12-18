

export const cartReducer = ( state, action ) => {

    const { type, payload } = action;

    const findProductIndex = state.findIndex(( item ) => item.id === payload.id);

    switch (type) {
        case 'ADD_TO_CART':

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
            
            case 'REMOVE_ONE_FROM_CART':
                
            if(payload.quantity === 1) {
                return state.filter( ( item ) => item.id !== payload.id );
            } else if( findProductIndex >= 0 ){
                const newState = structuredClone(state);
                newState[findProductIndex].quantity -= 1;
                return newState;
            }
        
        case 'CLEAR_CART':
            return payload;
    
        default:
            break;
    }
}
