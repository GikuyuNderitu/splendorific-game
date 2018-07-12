import {
  CREATE_GAME_ATTEMPT,
  CREATE_GAME_SUCCESS,
  CREATE_GAME_FAILURE
} from './types';

export const handleGameCreateAttempt = payload => ({type: CREATE_GAME_ATTEMPT, payload});
export const handleGameCreateSuccess = payload => ({type: CREATE_GAME_SUCCESS, payload});
export const handleGameCreateFailure = payload => ({type: CREATE_GAME_FAILURE, payload});