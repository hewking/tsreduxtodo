import React, { Ref } from 'react'
import {connect} from 'react-redux'
import {Dispatch} from 'redux'
import { isNumberTypeAnnotation } from '@babel/types';
import {addTodo} from '../actions'

interface AddTodoProps {
    dispatch : Dispatch<any>
}

let AddTodo = (props : AddTodoProps) => {
    let {dispatch} = props
    let input : any
    return (<div>
        <form
            onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                dispatch(addTodo(input.value))
                input.value = ''
            }}
        >
            <input ref = {node => {
                input = node
            }}/>
        </form>
    </div>)
}

export default connect()(AddTodo)