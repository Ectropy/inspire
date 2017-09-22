import { combineReducers } from 'redux'
import BandsReducer from './reducer_bands'
import TodosReducer from './reducer_todos'
import SelectedBand from './reducer_selectedband'
import { reducer as formReducer } from 'redux-form'
import authReducer from './reducer_auth'
import {
  AUTH_USER,
  UNAUTH_USER
} from '../actions/types'

// Define the properties of our Application State here
const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  bands: BandsReducer,
  SelectedBand: SelectedBand,
  todos: TodosReducer
})

export default rootReducer
