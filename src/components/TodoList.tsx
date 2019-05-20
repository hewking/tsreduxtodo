import React, { Component } from 'react'
import Todo from './Todo';
import {Todo as Todo2} from '../reducers/index'

interface Props {
    onTodoClick : (id :number) => void
    todos : Todo2[]
}

const TodoList = (props : Props) => {
    let {todos,onTodoClick} = props
    return (<ul>
        {todos.map(todo => {
           <Todo key = {todo.id} {...todo} onClick={() => onTodoClick(todo.id)}/>
        })}
    </ul>)
}

export default TodoList