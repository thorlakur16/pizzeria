import fetch from 'isomorphic-fetch';

const endpoint = 'http://localhost:3500/api/pizzas';

const  pizzaService = () => {
    console.log('in serverService');
    return {
        getPizzas: () => { fetch(endpoint).then(d => d.json())}
    }
};

export default pizzaService();