import { combineReducers } from 'redux';

import cars from './cars';
import tips from './tips';
import auth from './Auth';

export default combineReducers({ cars, tips, auth });