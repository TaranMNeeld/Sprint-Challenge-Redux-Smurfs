import axios from "axios";

export const GET_SMURFS = "GET_SMURFS";
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS";
export const GET_SMURFS_FAILED = "GET_SMURFS_FAILED";
export const ADD_SMURF = "ADD_SMURF";
export const ADD_SMURF_SUCCESS = "GET_SMURFS_SUCCESS";
export const ADD_SMURF_FAILED = "GET_SMURFS_FAILED";

export const getSmurfs = () => dispatch => {
    dispatch({ type: GET_SMURFS });
    axios
        .get(`http://localhost:3333/smurfs`)
        .then(res => {
            dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: GET_SMURFS_FAILED, payload: err });
        });
};

export const addSmurf = smurf => dispatch => {
    dispatch({ type: ADD_SMURF });
    return axios.post('http://localhost:3333/smurfs', smurf)
        .then(res => {
            dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: ADD_SMURF_FAILED, payload: err });
        });
}