import priceService from "../services/priceService";
import fetch from 'isomorphic-fetch';
import pizzaService from "../services/pizzaService";

export const getDetails = (data) => {
    return {
        type: 'DETAILS',
        payload: data
    }
};

export const getAllPizzas = () => {
    return (dispatch) => {
        return pizzaService.getAllPizzas().then(data => {
            dispatch(getAllPizzaSuccess(data));
        })
    };
};

const getAllPizzaSuccess = (pizzas) => {
    return {
        type: 'GET_ALL_PIZZAS',
        payload: pizzas
    };
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