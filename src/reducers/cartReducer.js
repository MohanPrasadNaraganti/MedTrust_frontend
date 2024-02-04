const initialState = {
    cart: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action?.type) {
        case 'add':
            return {
                ...state,
                cart:  action.payload, // Adding an item to the cart
            };
        case 'remove':
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id), // Removing an item from the cart based on its ID
            };
        default:
            return state;
    }
};

export default cartReducer;
