import * as types from '../consts';
import axios from 'axios';

export const add = (skill) => ( dispatch) => axios.post('/api/v1/skills/add', { skill }).then( response => {
  dispatch({
    type: types.SKILL_ADDED,
    payload: response.data.skill
  });
});

export const fetch = () => (dispatch) => axios.get('/api/v1/skills/get').then( response => {
  dispatch({
   type: types.SKILLS_FETCHED,
   payload: response.data.skills
  });
});