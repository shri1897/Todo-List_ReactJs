import React from 'react'
import { connect } from 'react-redux';
import * as actions from '../js/helper/actions/actions'
import PropTypes from 'prop-types';
import classes from '../css/TodoListItem.module.css'

const propTypes = {
    todoID: PropTypes.number.isRequired,
    todoText: PropTypes.string.isRequired,
    completedStatus: PropTypes.bool.isRequired,
    checkedStatus: PropTypes.bool.isRequired
}

function TodoListItem(props) {
    let todoItemClassName = determineClassName(props.completedStatus);

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

function mapDispatchToProps(dispatch, ownProps) {

    return {
        deleteItem: () => dispatch(
            actions.deleteItem(ownProps.todoID)
        ),
        handleCompletedStatusChange: () => dispatch(
            actions.handleCompletedStatusChange(ownProps.todoID)
        ),
        handleCheckedStatusChange: (event) => dispatch(
            actions.handleCheckedStatusChange(ownProps.todoID, event.target.checked)
        )
    };
}

export default connect(null, mapDispatchToProps)(TodoListItem);

function determineClassName(completedStatus) {
    let todoItemClassName = [classes.listItem];
    if (completedStatus) {
        todoItemClassName.push(classes.completed);
    }
    return todoItemClassName;
}
