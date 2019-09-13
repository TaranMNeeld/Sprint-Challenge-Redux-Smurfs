import {
  GET_SMURFS,
  GET_SMURFS_SUCCESS,
  GET_SMURFS_FAILED,
  ADD_SMURF,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILED,
  DELETE_SMURF,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAILED
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
        smurfs: action.payload,
        gettingSmurfs: false,
        error: ''
      }
    case GET_SMURFS_FAILED:
      return {
        ...state,
        gettingSmurfs: false,
        error: action.payload
      }
    case ADD_SMURF:
      return {
        ...state,
        addingSmurfs: true,
        error: ''
      }
      case ADD_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        addingSmurf: false,
        error: ''
      }
    case ADD_SMURF_FAILED:
      return {
        ...state,
        addingSmurf: false,
        error: action.payload
      }
    default:
      return state
  }
}