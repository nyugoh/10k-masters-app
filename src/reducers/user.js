import * as types from '../consts';

const user = (state=[], action={}) => {
	const { payload, type } = action;
	switch (type){
		case types.LOGGED_IN:
			return payload;
		case types.REGISTERED:
			return payload;
		default:
			return state;
	}
};

export default user;