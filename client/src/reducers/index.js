import {combineReducers} from 'redux';
import testReducer from './testReducer'
import modalReducer from './modalReducer'
import authReducer from './authReducer'
import {reducer as formReducer} from 'redux-form'

export default combineReducers({
    test: testReducer,
    modal: modalReducer,
    form: formReducer,
    auth: authReducer
})