import * as types from '../consts';
import axios from 'axios';

export const login = (data) => (dispatch) => axios.post('/api/v1/auth/login', {...data}).then( response => {
  localStorage.setItem('id_token', response.data.id);
  dispatch({
    type: types.LOGGED_IN,
    payload: response.data
  });
});

export const register = (data) => (dispatch) => axios.post('/api/v1/auth/register', { ...data }).then( response => {
  localStorage.setItem('id_token', response.data.id);
  dispatch({
    type: types.REGISTERED,
    payload: response.data
  });
});