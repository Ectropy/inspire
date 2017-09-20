import { combineReducers } from 'redux';
import BandsReducer from './reducer_bands';
import TodosReducer from './reducer_todos';

// Define the properties of our Application State here
const rootReducer = combineReducers({
	bands: BandsReducer,
	todos: TodosReducer
});

export default rootReducer;
