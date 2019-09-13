import axios from "axios";

export const GET_SMURFS = "GET_SMURFS";
export const GET_SMURFS_FAILED = "GET_SMURFS_FAILED";
export const ADD_SMURF = "ADD_SMURF";

export const getSmurfs = () => dispatch => {
    dispatch({ type: GET_SMURFS });
    axios
        .get(`http://localhost:3333/smurfs`)
        .then(res => {
            dispatch({ type: GET_SMURFS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: GET_SMURFS_FAILED, payload: err });
        });
};

export const addSmurf = (dispatch, smurf) => {
    return axios.post('http://localhost:3333/smurfs', smurf)
        .then(res => {
            dispatch({ type: ADD_SMURF, payload: res.data });
        });
}