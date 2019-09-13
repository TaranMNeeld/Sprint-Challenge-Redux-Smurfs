import {
  GET_SMURFS,
  GET_SMURFS_SUCCESS,
  GET_SMURFS_FAILED,
  ADD_SMURF
} from "../actions";

export const initialState = {
  smurfs: [],
  gettingSmurfs: false,
  addingSmurf: false,
  error: null
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURFS:
      return {
        ...state,
        gettingSmurfs: true
      }
      case GET_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: [...state.smurfs, action.payload],
        gettingSmurfs: false,
        error: ''
      }
    case GET_SMURFS_FAILED:
      return {
        error: action.payload
      }
    case ADD_SMURF:
      return {
        ...state,
        smurfs: [...state.smurfs, action.payload],
        gettingSmurfs: true,
        error: ''
      }
    default:
      return state
  }
}