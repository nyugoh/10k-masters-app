import { combineReducers } from 'redux';
import user from './user';

const rootReducer = (state=[], action={}) => {
	switch (action.type){
		default: return state;
	}
};

export default combineReducers({rootReducer, user});