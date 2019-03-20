import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import todoReducer from './js/reducers/todoReducer'
import TodoManager from './jsx/TodoManager'
import './css/index.module.css'

const todoStore = createStore(
    todoReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={todoStore}>
        <TodoManager />
    </Provider>,
    document.getElementById('todo-app-container')
);
