import detailReducer from './detailReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    details: detailReducer
});