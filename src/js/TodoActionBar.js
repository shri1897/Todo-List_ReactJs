import React from 'react'
import PropTypes from 'prop-types';
import classes from '../css/TodoActionBar.module.css'

const ENTER_KEY = 13;

const propTypes = {
    textValue: PropTypes.string.isRequired,
    handleInputTextChange: PropTypes.func.isRequired,
    addItem: PropTypes.func.isRequired,
    deleteSelected: PropTypes.func.isRequired,
    deleteCompleted: PropTypes.func.isRequired,
    selectDeselectAll: PropTypes.func.isRequired
}

function TodoActionBar(props) {

    function addItemOnEnterKeyUp(event) {
        if (event.which === ENTER_KEY) {
            props.addItem();
        }
    }

    return (
        <div className={classes['action-bar']}>
            <input
                type="text"
                className={classes['text-box']}
                placeholder="Write something to add"
                value={props.textValue}
                onChange={props.handleInputTextChange}
                onKeyUp={addItemOnEnterKeyUp}
            />
            <button
                className={classes['btn-add']}
                onClick={props.addItem}>
                Add
            </button>
            <button
                className={classes['btn-select-deselect-all']}
                onClick={props.selectDeselectAll}>
                Select/Deselect All
            </button>
            <button
                className={classes['btn-delete-selected']}
                onClick={props.deleteSelected}>
                Delete Selected         {/* is this right? */}
            </button>
            <button
                className={classes['btn-delete-completed']}
                onClick={props.deleteCompleted}>
                {'Delete Completed'}    {/* or is this a better way? */}
            </button>
        </div>
    );
}

TodoActionBar.propTypes = propTypes;

export default TodoActionBar;  // React.memo(TodoActionBar)? 