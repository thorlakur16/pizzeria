import priceService from "../services/priceService";
import pizzaService from "../services/pizzaService";
import fetch from 'isomorphic-fetch';

export const getDetails = (data) => {
    return {
        type: 'DETAILS',
        payload: data
    }
};

export const getAllPizzas = () => {
    return (dispatch) => {
        return pizzaService.getPizzas().then(data => {
            console.log('í getAllPizzas' +data);
            dispatch(getAllPizzaSuccess(data));

        });
    }
};

const getAllPizzaSuccess = (pizzas) => {
    console.log(pizzas);
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