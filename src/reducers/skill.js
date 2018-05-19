import * as types from '../consts';

const skills = (state=[], action={}) =>{
  const { type, payload, id } = action;
  switch (type) {
		case types.SKILL_ADDED:
    case types.SKILLS_FETCHED:
      return [
        ...state,
        ...payload
      ];
    case types.SKILL_DELETED:
      let skills = [];
      state.map( skill => {
        if( skill._id !== id)
          skills.push(skill);
      });
      return skills;
    case types.SKILL_ARCHIVED:
      skills = [];
			state.map( skill => {
				if( skill._id === payload._id)
					skills.push(payload);
				else
				  skills.push(skill);
			});
			return skills;
    default: return state;
  }
};

export default skills;