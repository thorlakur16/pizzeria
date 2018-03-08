import fetch from 'isomorphic-fetch';

const ENDPOINT = 'http://localhost:3500/api/pizzas/1';

const priceService = () => {
    return {
        getPizzaPrice: () => fetch(ENDPOINT).then(d => d.json()).then(d => d.price)
    }
};

export default priceService();