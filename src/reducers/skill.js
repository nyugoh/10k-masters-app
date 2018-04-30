import * as types from '../consts';

const skills = (state=[], action={}) =>{
  const { type, payload } = action;
  switch (type) {
    case types.SKILL_ADDED:
      return payload;
    default: return state;
  }
};

export default skills;