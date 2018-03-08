import fetch from 'fetch-jsonp';

const endpoint = 'http://battuta.medunes.net/api';
const key = 'eea6a7bd83e8065bca2654b80c3a2852';

const countryService = () => {
    return {
        getCountries: (format) => {
            return fetch(`${endpoint}/country/all/?key=${key}`).then(resp => resp.json()).then(countries => countries.map(c => format(c)));
        },
        getRegions: (countryCode = 'is', format) => {
            return fetch(`${endpoint}/region/${countryCode}/all/?key=${key}`).then(resp => resp.json()).then(regions => regions.map(r => format(r)));
        },
        getCities: (countryCode = 'is', regionName = '', format) => {
            return fetch(`${endpoint}/city/${countryCode}/search/?region=${regionName}&key=${key}`).then(resp => resp.json()).then(cities => cities.map(c => format(c)));
        }
    };
};

export default countryService();