import React from 'react'
import PropTypes from 'prop-types';
import classes from '../css/TodoListItem.module.css'

const propTypes = {
    todoID: PropTypes.number.isRequired,
    todoText: PropTypes.string.isRequired,
    checkedStatus: PropTypes.bool,
    completedStatus: PropTypes.bool,
    deleteItem: PropTypes.func.isRequired,
    handleCheckedStatusChange: PropTypes.func.isRequired,
    handleCompletedStatusChange: PropTypes.func.isRequired
}

const defaultProps = {
    checkedStatus: false,
    completedStatus: false
}

function TodoListItem(props) {
    let todoItemClassName = [classes['list-item']];   //better name? 

    if (props.completedStatus) {
        todoItemClassName.push(classes['completed']);
    }

    return (
        <div className={todoItemClassName.join(' ')} >
            <input
                type="checkbox"
                className={classes['check-box']}
                checked={props.checkedStatus}
                onChange={event => props.handleCheckedStatusChange(event, props.todoID)}
            />
            <p
                className={classes['todo-text']}>
                {props.todoText}
            </p>
            <button
                className={classes['btn-done']}
                onClick={() => props.handleCompletedStatusChange(props.todoID)}>
                Done
            </button>
            <button
                className={classes['btn-delete']}
                onClick={() => props.deleteItem(props.todoID)}>
                Delete
            </button>
        </div>
    );
}

TodoListItem.propTypes = propTypes;
TodoListItem.defaultProps = defaultProps;

export default TodoListItem;