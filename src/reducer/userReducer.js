import * as types from "../action/types" 

const initState = {
    isLogin: false,
    SIGN: null,
    error: null,
}

export function userReducer(state = initState , action) {
    switch(action.type){
        case types.FETCH_USER.FETCH_USER_BEGIN:
            return {
                ...state,
                error: null
              };

        case types.FETCH_USER.FETCH_USER_SUCCESS:
            return {
                ...state,
                isLogin : true,
                SIGN: action.payload
              };
        
        case types.FETCH_USER.FETCH_USER_FAILURE:
            return{
                ...state,
                isLogin : false
            }

        default:
            return state;
    }

}

