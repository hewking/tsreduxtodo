import {connect} from 'react-redux'
import {toggleTodo} from '../actions'

const getVisibleTodos = (todos : [],filter : string) => {
    switch(filter) {
        case 'SHOW_COMPLETED' : 
        return todos.filter(t => t.completed)
    }
}


