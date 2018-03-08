const pizzaReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_ALL_PIZZAS': return action.payload;
        default: return state;
    }
};

export default pizzaReducer;