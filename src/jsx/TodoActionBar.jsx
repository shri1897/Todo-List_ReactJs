import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../js/helper/actions/actions'
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

function mapDispatchToProps(dispatch) {
    return {
        addItem: () => dispatch(actions.addItem()),
        selectDeselectAll: () => dispatch(actions.selectDeselectAll()),
        deleteSelected: () => dispatch(actions.deleteSelected()),
        deleteCompleted: () => dispatch(actions.deleteCompleted()),
        handleInputTextChange: (event) => dispatch(actions.handleInputTextChange(event.target.value))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoActionBar);
