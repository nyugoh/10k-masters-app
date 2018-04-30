import { combineReducers } from 'redux';
import user from './user';
import skill from './skill';

export default combineReducers({ user, skill });