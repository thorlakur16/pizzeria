import detailReducer from './detailReducer';
import priceReducer from './priceReducer';
import pizza from './pizzaReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    pizzaPrice: priceReducer,
    pizza
});