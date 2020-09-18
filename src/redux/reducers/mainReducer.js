import {combineReducers} from 'redux';
import {todoItemsReducer} from './todoItemsReducer'

export const mainReducer = combineReducers({
    todos: todoItemsReducer
})
