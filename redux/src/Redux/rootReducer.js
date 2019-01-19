import { combineReducers } from 'redux'
import authReducers from './Reducers/authReducers'

export default combineReducers({
    re : authReducers
})