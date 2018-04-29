import * as types from '../consts'
import axios from 'axios';

export const add = (skill) => ( dispatch) => axios.post('/api/v1/skill/add', { skill }).then( response => {
  dispatch({
    type: types.SKILL_ADDED,
    payload: response.data
  })
});