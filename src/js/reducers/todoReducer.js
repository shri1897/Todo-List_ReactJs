import { deepCopy } from '../helper/deepCopy/deepCopy'
import * as actionTypes from '../helper/actions/actionsTypes'

const initialState = {
    todoItems: [],
    todoInputText: ''
}

function todoReducer(state = initialState, action) {    //rename all the functions
    switch (action.type) {
        case actionTypes.ADD_ITEM:
            return stateAfterAddingItem(state, action.data);

        case actionTypes.DELETE_ITEM:
            return stateAfterDeletingItem(state, action.data);

        case actionTypes.DELETE_SELECTED:
            return stateAfterDeletingSelected(state);

        case actionTypes.DELETE_COMPLETED:
            return stateAfterDeletingCompleted(state);

        case actionTypes.SELECT_DESELECT_ALL:
            return stateAfterSelectingDeselecting(state);

        case actionTypes.CHECKED_STATUS_CHANGE:
            return stateAfterChangingCheckedStatus(state, action.data);

        case actionTypes.COMPLETED_STATUS_CHANGE:
            return stateAfterChangingCompletedStatus(state, action.data);

        case actionTypes.INPUT_TEXT_CHANGE:
            return { ...state, todoInputText: action.data.inputText };

        default:
            return state;
    }
}

export default todoReducer;


function stateAfterAddingItem(state, data) {
    let todoItems = deepCopy(state.todoItems);
    let todoText = state.todoInputText;
    if (todoText) {
        todoItems.push({
            todoID: data.todoID,
            todoText: todoText,
            checkedStatus: false,
            completedStatus: false
        });
        return { ...state, todoItems, todoInputText: '' };
    } else {
        return state;
    }
}

function stateAfterDeletingItem(state, data) {
    let todoItems = deepCopy(state.todoItems);
    let todoID = data.todoID;
    todoItems = todoItems.filter(item => {
        return item.todoID !== todoID;
    });
    return { ...state, todoItems };
}

function stateAfterDeletingSelected(state) {
    let todoItems = deepCopy(state.todoItems);
    todoItems = todoItems.filter((item) => {
        return !item.checkedStatus;
    });
    if (todoItems.length !== state.todoItems.length) {
        return { ...state, todoItems };
    } else {
        return state;
    }
}

function stateAfterDeletingCompleted(state) {
    let todoItems = deepCopy(state.todoItems);
    todoItems = todoItems.filter((item) => {
        return !item.completedStatus;
    });
    if (todoItems.length !== state.todoItems.length) {
        return { ...state, todoItems };
    } else {
        return state;
    }
}

function stateAfterSelectingDeselecting(state) {
    let todoItems = deepCopy(state.todoItems);
    if (todoItems[0]) {
        let checkUncheck = !todoItems[0].checkedStatus;
        todoItems.forEach((item) => {
            item.checkedStatus = checkUncheck;
        });
        return { ...state, todoItems };
    } else {
        return state;
    }
}

function stateAfterChangingCheckedStatus(state, data) {
    let todoItems = deepCopy(state.todoItems);
    todoItems.forEach(item => {
        if (item.todoID === data.todoID) {
            item.checkedStatus = data.checkedStatus;
        }
    });
    return { ...state, todoItems };
}

function stateAfterChangingCompletedStatus(state, data) {
    let todoItems = deepCopy(state.todoItems);
    todoItems.forEach(item => {
        if (item.todoID === data.todoID) {
            item.completedStatus = !item.completedStatus;
        }
    });
    return { ...state, todoItems };
}
