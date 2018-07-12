import {
  CREATE_GAME_ATTEMPT,
  CREATE_GAME_SUCCESS,
  CREATE_GAME_FAILURE,

  LOAD_ROOM_ATTEMPT,
  LOAD_ROOM_SUCCESS,
  LOAD_ROOM_FAILURE
} from '../actions/types'

const initialState = {
  subscribing: false,
  rooms: [],
}

export default (state = initialState, action) => {
  switch(action.type) {
    case CREATE_GAME_ATTEMPT:
      return {...state, subscribing: true};
    case CREATE_GAME_SUCCESS:
      const {rooms} = state;      
      return {...state, subscribing: false, rooms: rooms.concat(action.payload)};
    case CREATE_GAME_FAILURE:
      return {...state, subscribing: false};
    case LOAD_ROOM_ATTEMPT:
      return {...state};
    case LOAD_ROOM_SUCCESS:
      return {...state};
    case LOAD_ROOM_FAILURE:
      return {...state};
    default:
      return state;
  }
}