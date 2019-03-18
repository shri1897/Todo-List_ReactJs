import React from 'react'
import { connect } from 'react-redux';
import * as actionTypes from '../js/helper/actions/actions'
import PropTypes from 'prop-types';
import classes from '../css/TodoListItem.module.css'

const propTypes = {
    todoID: PropTypes.number.isRequired,
    todoText: PropTypes.string.isRequired,
    completedStatus: PropTypes.bool.isRequired,
    checkedStatus: PropTypes.bool.isRequired
}

function TodoListItem(props) {
    let todoItemClassName = calculateClassName(props.completedStatus);

    return (
        <div className={todoItemClassName.join(' ')}>
            <input
                type="checkbox"
                className={classes.checkBox}
                checked={props.checkedStatus}
                onChange={props.handleCheckedStatusChange}
            />
            <p
                className={classes.todoText}>
                {props.todoText}
            </p>
            <button
                className={classes.btnDone}
                onClick={props.handleCompletedStatusChange}>
                Done
            </button>
            <button
                className={classes.btnDelete}
                onClick={props.deleteItem}>
                Delete
            </button>
        </div>
    );
}

TodoListItem.propTypes = propTypes;

const mapDispatchToProps = (dispatch, ownProps) => {    //avoid using arrow function like this?
    function deleteItem() {
        dispatch({
            type: actionTypes.DELETE_ITEM,
            data: { todoID: ownProps.todoID }
        });
    }

    function handleCheckedStatusChange(event) {
        dispatch({
            type: actionTypes.CHECKED_STATUS_CHANGE,
            data: { todoID: ownProps.todoID, checkedStatus: event.target.checked }
        });
    }

    function handleCompletedStatusChange() {
        dispatch({
            type: actionTypes.COMPLETED_STATUS_CHANGE,
            data: { todoID: ownProps.todoID }
        });
    }

    return {
        deleteItem,
        handleCheckedStatusChange,
        handleCompletedStatusChange
    }
}

export default connect(null, mapDispatchToProps)(TodoListItem);

function calculateClassName(completedStatus) {
    let todoItemClassName = [classes.listItem];
    if (completedStatus) {
        todoItemClassName.push(classes.completed);
    }
    return todoItemClassName;
}
