import {combineReducers} from 'redux';
import userState from './userReducer';
import roomState from './roomReducer';

export default combineReducers({
  userState,
  roomState
})

