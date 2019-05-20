import {Action} from '../actions/index'
import {Todo} from '../reducers/index'
import { Reducer } from 'redux';

const todos :Reducer<Todo[], any> = (state: Todo[] = [],action) => {
    switch(action.type){
        case 'ADD_TODO' :
        return [...state,
        {
            id:action.id,
            text : action.text,
            completed : false
        }]
        case 'TOGGLE_TODO' :
        for (let todo of state) {
            if (todo.id === action.id ) {
                todo.completed = !todo.completed
            }
        }
        return state
        default:
        return state
    }  
}

export default todos