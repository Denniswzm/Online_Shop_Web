import * as types from "./types";

export const loginUser = (username, password) => async (dispatch, getState) => {
    const result = await dispatch({
        type: types.FETCH_USER.FETCH_USER_BEGIN,
        payload: fetch(
            'http://localhost:8080/api/auth',
            {
                method: 'post',
                mode: 'cors',
                cache: 'no-cache',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,password
                })
            })
    })
    console.log("data: ")
    console.log(result);
    const data = await result.payload;
    const resp = await data.text();
    if (resp === 'success') {
        dispatch({
            type: types.FETCH_USER.FETCH_USER_SUCCESS,
            payload: username
        })
    } else {
        dispatch({
            type: types.FETCH_USER.FETCH_USER_FAILURE,
            payload: null
        })
    }
};
  
export const fetchUserSuccess = users => ({
    type: types.FETCH_USER.FETCH_USER_SUCCESS,
    payload: { users },
    isLogin:true
});
  
export const fetchUserFailure = error => ({
    type: types.FETCH_USER.FETCH_USER_FAILURE,
    payload: { error },
    isLogin:false
});


