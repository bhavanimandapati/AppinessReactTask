import { combineReducers } from 'redux';
import userDetailsReducer from './user/users-details-reducer';
import spinnerReducer from './spinner/spinner-reducer';

export default combineReducers({
   
userDetailsReducer,
spinnerReducer,
})