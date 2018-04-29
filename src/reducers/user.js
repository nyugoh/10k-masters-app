import * as types from '../consts';

const user = (state=[], action={}) => {
	switch (action.type){
		case types.LOGGED_IN:
			return {
				token: action.payload
			};
		default:
			return state;
	}
};

export default user;