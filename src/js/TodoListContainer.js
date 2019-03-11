import React from 'react'
import PropTypes from 'prop-types';
import TodoListItem from './TodoListItem'
import styles from '../css/TodoListContainer.module.css'

const propTypes = {
    todoItems: PropTypes.array.isRequired,
    deleteItem: PropTypes.func.isRequired,
    handleCheckedStatusChange: PropTypes.func.isRequired,
    handleCompletedStatusChange: PropTypes.func.isRequired
}

function TodoListContainer(props) {
    let listItems = props.todoItems.map((item) => {
        return (
            < TodoListItem
                key={item.todoID}
                todoID={item.todoID}
                todoText={item.todoText}
                checkedStatus={item.checkedStatus}
                completedStatus={item.completedStatus}
                deleteItem={props.deleteItem}
                handleCheckedStatusChange={props.handleCheckedStatusChange}
                handleCompletedStatusChange={props.handleCompletedStatusChange}
            />
        );
    });

    return (
        <div className={styles['list-container']}>
            {listItems}
        </div>
    );
}

TodoListContainer.propTypes = propTypes;

export default TodoListContainer;