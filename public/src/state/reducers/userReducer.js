import {
  LOGIN_ATTEMPT,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,

  REGISTRATION_ATTEMPT,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILURE
} from '../actions/types';

const initialState = {
  fetchingUser: false,
  isAuthenticated: false,
  user: null,
  authError: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_ATTEMPT:
      return {...state, fetchingUser: true};
    case LOGIN_SUCCESS:
      return {...state, fetchingUser: false, isAuthenticated: true};
    case LOGIN_FAILURE:
      return {...state, fetchingUser: false, isAuthenticated: false};
    case REGISTRATION_ATTEMPT:
      return {...state, fetchingUser: true};
    case REGISTRATION_SUCCESS:
      return {...state, fetchingUser: false, isAuthenticated: true};
    case REGISTRATION_FAILURE:
      return {...state, fetchingUser: false, isAuthenticated: false};
    default:
      return state;
  }
}