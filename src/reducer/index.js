import { combineReducers } from 'redux'
import { reducer } from './userReducer'


export const reducers = combineReducers({
    user: userReducer,
})