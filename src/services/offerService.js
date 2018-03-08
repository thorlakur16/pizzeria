import fetch from 'isomorphic-fetch';

const ENDPOINT = 'http://localhost:3500/api/offers';

const offerService = () => {
    return {
        getAllOffers: () => fetch(ENDPOINT).then(d => d.json()).then(d => d)
    }
};

export default offerService();