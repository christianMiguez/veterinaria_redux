import {combineReducers} from 'redux';
import citasReducer from './citasReducer'
import errorReducer from './errorReducer'

export default combineReducers({
  citas: citasReducer,
  error: errorReducer
})
