import * as types from "./types";

export const fetchUserBegin = () => ({
    type: types.FETCH_USER.FETCH_USER_BEGIN,
});
  
export const fetchUserSuccess = users => ({
    type: types.FETCH_USER.FETCH_USER_SUCCESS,
    payload: { users }
});
  
export const fetchUserFailure = error => ({
    type: types.FETCH_USER.FETCH_USER_FAILURE,
    payload: { error }
});

//USER STATE

export const setUserStateTrue = () =>({
	type: types.USER_LOGIN.STATE_TRUE,
	payload: true,
})

export const setUserStateFalse = () =>({
	type: types.USER_LOGIN.STATE_FALSE,
	payload: false,
})

