import * as types from '../consts';
import axios from 'axios';

export const login = (data) => (dispatch) => axios.post('/api/v1/auth/login', {...data}).then( response => {
  dispatch({
    type: types.LOGGED_IN,
    payload: response.data
  });
});