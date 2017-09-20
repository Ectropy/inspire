import { combineReducers } from 'redux';
import BandsReducer from './reducer_bands';
import TodosReducer from './reducer_todos';
import SelectedBand from './reducer_selectedband';
import {reducer as formReducer} from 'redux-form';

// Define the properties of our Application State here
const rootReducer = combineReducers({
	bands: BandsReducer,
	SelectedBand: SelectedBand,
	todos: TodosReducer
});

export default rootReducer;
