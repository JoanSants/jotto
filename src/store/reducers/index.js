import { combineReducers } from 'redux';
import successReducer from './success';

export default combineReducers({
	success: successReducer
});
