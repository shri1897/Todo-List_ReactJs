import React from 'react'
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem'
import classes from '../css/TodoListContainer.module.css'

function TodoListContainer(props) {
    let todoItems = renderTodoItems(props.todoItems);

    return (
        <div className={classes.listContainer}>
            {todoItems}
        </div>
    );
}

function mapStateToProps(state) {
    return {
        todoItems: state.todoItems
    };
}

export default connect(mapStateToProps)(TodoListContainer);

function renderTodoItems(todoItems) {
    return todoItems.map((item) => {
        return (
            <TodoListItem
                key={item.todoID}
                todoID={item.todoID}
                todoText={item.todoText}
                checkedStatus={item.checkedStatus}
                completedStatus={item.completedStatus}
            />
        );
    });
}
