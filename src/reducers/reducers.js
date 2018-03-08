import detailReducer from './detailReducer';
import priceReducer from './priceReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    pizzaPrice: priceReducer
});