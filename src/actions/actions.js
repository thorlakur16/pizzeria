import priceService from "../services/priceService";

export const getDetails = (data) => {
    return {
        type: 'DETAILS',
        payload: data
    }
};

export const getPizzaPrice = () => {
    return (dispatch) => {
        return priceService.getPizzaPrice().then(data => {
            console.log(data);
            dispatch(getPizzaPriceSuccess(data));
        });
    }
};

const getPizzaPriceSuccess = (pizzaPrice) => {
    return {
        type: 'GET_PRICE_FOR_PIZZA',
        payload: pizzaPrice
    }
};