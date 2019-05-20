let nextTodoId = 0

export interface Action {
    type: string,
    id : number,
    text : string,
    filter? : string
}

export const addTodo = (text : string) => {
    return {
        type : 'ADD_TODO',
        id : nextTodoId ++,
        text
    }
}

export const toggleTodo = (id : number) => {
    return {
        type : 'TOGGLE_TODO',
        id
    }
}