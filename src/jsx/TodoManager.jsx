import React from 'react';
import TodoActionBar from './TodoActionBar'
import TodoListContainer from './TodoListContainer'

function TodoManager() {

    return (
        <>
            < TodoActionBar />
            < TodoListContainer />
        </>
    );
}

export default TodoManager;