/*
    Service to provide data for country, region and city
**/
import fetch from 'fetch-jsonp';

const endpoint = 'http://localhost:3500/api/pizzas';

const  serverService = () => {
    return {
        getPizzas: () => {
            return fetch(`${endpoint}`).then(function(response) {
                console.log(response);
                return response.json()
            }).then(function(json) {
                console.log('parsed json', json)
            }).catch(function(ex) {
                console.log('parsing failed', ex)
            });
        }
    };
};

export default serverService();