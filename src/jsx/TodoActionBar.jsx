import React from 'react'
import { connect } from 'react-redux'
import * as actionTypes from '../js/helper/actions/actions'
import classes from '../css/TodoActionBar.module.css'

const ENTER_KEY = 13;

function TodoActionBar(props) {

    function addItemOnKeyPress(event) {
        if (event.which === ENTER_KEY) {
            props.addItem();
        }
    }

    return (
        <div className={classes.actionBar}>
            <input
                type="text"
                className={classes.textBox}
                placeholder="Write something to add"
                value={props.inputText}
                onChange={props.handleInputTextChange}
                onKeyPress={addItemOnKeyPress}
            />
            <button
                className={classes.btnAdd}
                onClick={props.addItem}>
                Add
            </button>
            <button
                className={classes.btnSelectDeselectAll}
                onClick={props.selectDeselectAll}>
                Select/Deselect All
            </button>
            <button
                className={classes.btnDeleteSelected}
                onClick={props.deleteSelected}>
                Delete Selected
            </button>
            <button
                className={classes.btnDeleteCompleted}
                onClick={props.deleteCompleted}>
                Delete Completed
            </button>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        inputText: state.todoInputText
    };
}

function mapDispatchToProps(dispatch) { //use arrow functions like so?
    return {
        addItem: () => dispatch({ type: actionTypes.ADD_ITEM }),
        selectDeselectAll: () => dispatch({ type: actionTypes.SELECT_DESELECT_ALL }),
        deleteSelected: () => dispatch({ type: actionTypes.DELETE_SELECTED }),
        deleteCompleted: () => dispatch({ type: actionTypes.DELETE_COMPLETED }),
        handleInputTextChange: (event) => dispatch({
            type: actionTypes.INPUT_TEXT_CHANGE,
            data: { inputText: event.target.value }
        })
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoActionBar);











































// function addItem() {
//     Publisher.publish({ topic: 'ADD_ITEM' })
// }

// function addItemOnKeyPress(event) {
//     if (event.which === ENTER_KEY) {
//         addItem();
//     }
// }

// function selectDeselectAll() {
//     Publisher.publish({ topic: 'SELECT_DESELECT_ALL' })
// }

// function deleteSelected() {
//     Publisher.publish({ topic: 'DELETE_SELECTED' })
// }

// function deleteCompleted() {
//     Publisher.publish({ topic: 'DELETE_COMPLETED' })
// }

// function handleInputTextChange(event) {
//     Publisher.publish({ topic: 'INPUT_TEXT_CHANGE', data: { inputText: event.target.value } })
// }