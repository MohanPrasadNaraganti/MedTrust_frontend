const initialState = {
    user: null,
};

const userReducer = (state = initialState, action) => {
    switch (action?.type) {
        case 'login':
            // Ensure action.payload exists before updating the state
            if (action.payload) {
                return {
                    ...state,
                    user: action.payload,
                };
            }
            // Handle the case when action.payload is not provided or invalid
            return state;

        default:
            return state;
    }
};

export default userReducer;
