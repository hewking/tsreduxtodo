import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import App from './App';
import todos from './reducers'
import {createStore,combineReducers} from 'redux'
import {Provider} from 'react-redux'

let store = createStore(todos)

render(<Provider store = {store}>
    <App/>
</Provider>,document.getElementById('root'))