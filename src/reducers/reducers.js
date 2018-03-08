import priceReducer from './priceReducer';
import pizza from './pizzaReducer';
import offer from './offerReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    pizzaPrice: priceReducer,
    pizza,
    offer
});