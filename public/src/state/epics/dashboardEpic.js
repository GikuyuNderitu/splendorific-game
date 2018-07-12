import { Observable } from "rxjs/Observable";
import { fetchGet, fetchPost } from '../../utility';
import io from 'socket.io-client'
import {
  LOAD_DASHBOARD_ATTEMPT,
  LOAD_DASHBOARD_SUCCESS,
  LOAD_DASHBOARD_FAILURE,

  LOAD_ROOM_ATTEMPT,
  LOAD_ROOM_SUCCESS,
  LOAD_ROOM_FAILURE,  
} from '../actions/types';

import 'rxjs/add/operator/map';
import { 
  handleDashboardConnectionSuccess, 
  handleDashboardConnectionFailure
} from "../actions/dashboardActions";
// import { } from '../actions/gameActions';


const createSocketObservable = (url, options={}) => {
  const socket = io(url, options)
  return Observable.create(observable => {
    socket.on('new-user-connection', data => {
      observable.next(handleDashboardConnectionSuccess(data));
    });

    socket.on('dashboard-message', data => {
    });

    socket.on('room-message', data => {

    });
  });
}

export const dashboardConnectionEpic = action$_ => 
  action$_.ofType(LOAD_DASHBOARD_ATTEMPT)
    .mergeMap(() =>
      createSocketObservable('/games')
    )
