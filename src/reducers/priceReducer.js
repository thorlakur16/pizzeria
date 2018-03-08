
const priceReducer = (state = 0, action) => {
    switch (action.type) {
        case 'GET_PRICE_FOR_PIZZA': return action.payload;
        default: return state;
    }
};

export default priceReducer;