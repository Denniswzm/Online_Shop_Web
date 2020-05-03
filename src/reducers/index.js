export default function reducer(state = [], {type, payload}) {
    switch(type){
        case 'SET_USER_STATE':
            return {...state, user: payload};
        case 'BeforeLogin':
            return {
                ...state,
                payload
            }
        case 'AfterLogin':
            return Object.assign();
    }
    return state;
}