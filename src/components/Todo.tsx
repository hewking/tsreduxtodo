import React from 'react'

interface Props {
    onClick : ()=> void
    completed : boolean
    text : string
}

const Todo = (props : Props) => {
    let {onClick,completed,text} = props
    return (<li onClick={onClick}
        style={{textDecoration:completed ? 'line-through' : 'none'}}>
        {text}
    </li>)
}

export default Todo