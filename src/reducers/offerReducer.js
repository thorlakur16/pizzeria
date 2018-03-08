const offerReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_ALL_OFFERS':
            console.log(action.payload);
            return action.payload;
        default: return state;
    }
};

export default offerReducer;