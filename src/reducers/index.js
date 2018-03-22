import ToDoReducer from './ToDoReducer';
import {combineReducers} from 'redux';
const reducers = combineReducers({
    newState: ToDoReducer
})

export default reducers;
