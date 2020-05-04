import * as types from "../action/types" 

const initState = {
    SIGN: [],
    error: null,

}

export function reducer(state = initState , action) {
    switch(action.type){
        case types.FETCH_USER.FETCH_USER_BEGIN:
            return {
                ...state,
                error: null
              };

        case types.FETCH_USER.FETCH_USER_SUCCESS:
            return {
                ...state,
                SIGN = true
              };
        
        case types.FETCH_USER.FETCH_USER_FAILURE:
            return{
                ...state,
                SIGN = false
            }

        default:
            return state;
    }

}

