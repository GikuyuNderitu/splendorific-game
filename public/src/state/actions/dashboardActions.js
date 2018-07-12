import {
  LOAD_DASHBOARD_ATTEMPT,
  LOAD_DASHBOARD_SUCCESS,
  LOAD_DASHBOARD_FAILURE,

  NEW_USER_CONNECTION
} from './types';

export const handleDashboardConnectionAttempt = () => ({type: LOAD_DASHBOARD_ATTEMPT});
export const handleDashboardConnectionSuccess = payload => ({type: LOAD_DASHBOARD_SUCCESS, payload});
export const handleDashboardConnectionFailure = payload => ({type: LOAD_DASHBOARD_FAILURE, payload});
export const handleNewUserConnection = payload => ({type: NEW_USER_CONNECTION, payload});