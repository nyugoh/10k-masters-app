import * as types from '../consts';

const skills = (state=[], action={}) =>{
  const { type, payload } = action;
  switch (type) {
      case types.SKILL_ADDED:
        return  [
            ...state,
              payload
          ];
    case types.SKILLS_FETCHED:
      return [
        ...state,
        ...payload
      ];
    case types.SKILL_DELETED:
      let skills = [];
      state.map( skill => {
        if( skill._id !== payload)
          skills.push(skill);
      });
      return skills;
    default: return state;
  }
};

export default skills;