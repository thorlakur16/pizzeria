import fetch from 'isomorphic-fetch';

const ENDPOINT = 'http://localhost:3500/api/pizzas';

const  pizzaService = () => {
    return {
        getAllPizzas: () => fetch(ENDPOINT).then(d => d.json()).then(d => d)
    }
};




export default pizzaService();