import {connect} from 'react-redux'
import {toggleTodo} from '../actions'
import { Todo } from '../reducers';
import { Dispatch } from 'redux';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos : Todo[],filter : string) => {
    switch(filter) {
        case 'SHOW_COMPLETED' : 
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
        case 'SHOW_ALL':
        default:
        return todos
    }   
}

export interface VisibleTodoState {
    todos : Todo[],
    visibilityFilter : string
}

const mapStateToProps = (state : VisibleTodoState) => {
    return {
        todos : getVisibleTodos(state.todos,state.visibilityFilter)
    }
}

const mapDispatchToProps = (dispatch : Dispatch) => {
    return {
        onTodoClick : (id : number) => {
            dispatch(toggleTodo(id))
        }
    }
}

const VisibleTodoList = connect(mapStateToProps
    ,mapDispatchToProps)(TodoList)

export default VisibleTodoList

