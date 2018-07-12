import { Observable } from "rxjs/Observable";
import { fetchGet, fetchPost } from '../../utility';
import {
  LOGIN_ATTEMPT,
  REGISTRATION_ATTEMPT
} from '../actions/types';

import 'rxjs/add/operator/map';
import { handleRegisterSuccess, handleRegisterFailure } from "../actions/userActions";

export const loginEpic = action$_ => 
  action$_.ofType(LOGIN_ATTEMPT)
  .mergeMap(({payload}) => 
    Observable.fromPromise(fetchPost(payload))
  );

export const registerEpic = action$_ =>
  action$_.ofType(REGISTRATION_ATTEMPT)
  .mergeMap(({payload}) =>
    Observable.fromPromise(fetchPost('/api/users/register', payload))
    .map(data => handleRegisterSuccess(data))
    .catch(err => Observable.of(handleRegisterFailure(err)))
  )



