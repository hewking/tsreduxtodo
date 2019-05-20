import {combineReducers} from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFIlter'
const todoApp = combineReducers({
    todos,
    visibilityFilter
})

export interface Todo {
    id :number,
    completed : boolean,
    text : string
}

export default todoApp