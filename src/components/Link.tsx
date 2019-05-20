import React from 'react'

interface Props {
    active : boolean,
    children : string,
    onClick : () => void,
}

const Link = (props : Props) => {
    let {active,children,onClick} = props
    if (active) {
        return <span>{children}</span>
    }
    return (<a href='https://www.baidu.com'
        onClick = {e => {
            e.preventDefault()
            onClick()
        }}
    >
        {children}
    </a>)
}

export default Link