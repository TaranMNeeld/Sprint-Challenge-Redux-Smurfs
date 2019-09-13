import axios from "axios";
export const GET_SMURFS = "GET_SMURFS";
export const ADD_SMURFS = "ADD_SMURFS";
export const GET_SMURFS_FAILED = "GET_SMURFS_FAILED";

export const getSmurfs = () => dispatch => {
    dispatch({ type: GET_SMURFS });
    axios
        .get("/smurfs")
        .then(res => {
          console.log(res)
            dispatch({ type: GET_SMURFS, payload: res.data.message });
        })
        .catch(err => {
            dispatch({ type: GET_SMURFS_FAILED, payload: err });
        });
};
