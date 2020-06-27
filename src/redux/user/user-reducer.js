import {
  SET_CURRENT_USER
} from './user-constants'

const INITIAL_STATE = {
  currentUser: null
}

// return a new state in pure form
const userReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
}

export default userReducer;