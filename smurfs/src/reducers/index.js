import {
  GET_SMURFS,
  ADD_SMURF,
  GET_SMURFS_FAILED
} from "../actions";

const initialState = {
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
        smurfs: [...state.smurfs, action.payload],
        gettingSmurfs: true,
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
        gettingSmurfs: false,
        error: ''
      }
    default:
      return state
  }
}