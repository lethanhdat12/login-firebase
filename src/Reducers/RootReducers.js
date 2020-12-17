import {combineReducers} from 'redux'
import loginReducer from './LoginReducer'

const RootReducers = combineReducers({
    Login : loginReducer,
})

export default RootReducers;