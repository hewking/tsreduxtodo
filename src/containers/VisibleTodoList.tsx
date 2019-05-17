import {connect} from 'react-redux'
import {toggleTodo} from '../actions'
import { Todo } from '../reducers';

const getVisibleTodos = (todos : Todo[],filter : string) => {
    switch(filter) {
        case 'SHOW_COMPLETED' : 
        return todos.filter(t => t.completed)
    }
}


