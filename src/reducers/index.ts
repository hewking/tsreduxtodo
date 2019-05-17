
import {combineReducers} from 'redux'
import todos from './todos'
const todoApp = combineReducers(todos)

export interface Todo {
    completed : boolean
}


export default todoApp