import * as types from '../consts';
import axios from 'axios';

const base = '/api/v1/skills';

export const add = (skill) => ( dispatch) => axios.post(`${base}/add`, { skill }).then( response => {
  dispatch({
    type: types.SKILL_ADDED,
    payload: response.data.skill
  });
});

export const fetch = () => (dispatch) => axios.get(`${base}/get`).then( response => {
  dispatch({
   type: types.SKILLS_FETCHED,
   payload: response.data.skills
  });
});

export const remove = id => dispatch => axios.delete(`${base}/remove/${id}`).then( response => {
  dispatch({
    type: types.SKILL_DELETED,
    payload: response.data.id
  });
});

export const archiveSkill = id => dispatch => axios.post(`${base}/archive/${id}`).then( response => {
  dispatch({
    type: types.SKILL_ARCHIVED,
    payload: response.data.skill
  });
});