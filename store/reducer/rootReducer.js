const initState = {
    products: [
        
    ],
}


const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_API_PRODUCTS':
            
            return {
                ...state, products: action.products
            }
        
        default:
            break;
    }
}

export {
    initState,
    rootReducer
}