import {
  LOGIN_ATTEMPT,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,

  REGISTRATION_ATTEMPT,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILURE
} from './types';

export const handleLoginAttempt = payload => ({type: LOGIN_ATTEMPT, payload});
export const handleLoginSuccess = payload => ({type: LOGIN_SUCCESS, payload});
export const handleLoginFailure = payload => ({type: LOGIN_FAILURE, payload});

export const handleRegisterAttempt = payload => ({type: REGISTRATION_ATTEMPT, payload});
export const handleRegisterSuccess = payload => ({type: REGISTRATION_SUCCESS, payload});
export const handleRegisterFailure = payload => ({type: REGISTRATION_FAILURE, payload});
