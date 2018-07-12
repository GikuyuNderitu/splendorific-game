import {
  LOAD_DASHBOARD_ATTEMPT,
  LOAD_DASHBOARD_SUCCESS,
  LOAD_DASHBOARD_FAILURE
} from '../actions/types';

const initialState = {
  loadingDashboard: false,
  dashboardLoaded: false,
  dashboardConnection: null,
  connectionError: null
};

export default (state = initialState, action) => {
  switch(action.type) {
    case LOAD_DASHBOARD_ATTEMPT:
      return {...state, loadingDashboard: true};
    case LOAD_DASHBOARD_SUCCESS:
      return {...state, loadingDashboard: false, dashboardLoaded: true, dashboardConnection: action.payload};
    case LOAD_DASHBOARD_FAILURE:
      return {...state, loadingDashboard: false, connectionError: action.payload};
    default:
      return state
  }
}