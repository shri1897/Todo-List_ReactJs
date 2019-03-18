import { deepCopy } from '../helper/deepCopy/deepCopy'
import * as actionTypes from '../helper/actions/actions'

const initialState = {
    todoItems: [],
    todoInputText: ''
}

function todoReducer(state = initialState, action) {    //move each case to different functions
    switch (action.type) {
        case actionTypes.ADD_ITEM:
            {
                let todoItems = deepCopy(state.todoItems);
                let todoText = state.todoInputText;
                if (todoText) {
                    todoItems.push({
                        todoID: Date.now(),
                        todoText: todoText,
                        checkedStatus: false,
                        completedStatus: false
                    });
                    return { ...state, todoItems, todoInputText: '' };
                } else {
                    return state;
                }
            }

        case actionTypes.DELETE_ITEM:
            {
                let todoItems = deepCopy(state.todoItems);
                let todoID = action.data.todoID;
                todoItems = todoItems.filter(item => {
                    return item.todoID !== todoID;
                });
                return { ...state, todoItems };
            }

        case actionTypes.DELETE_SELECTED:
            {
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

        case actionTypes.DELETE_COMPLETED:
            {
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

        case actionTypes.SELECT_DESELECT_ALL:
            {
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

        case actionTypes.INPUT_TEXT_CHANGE:
            {
                return { ...state, todoInputText: action.data.inputText };
            }

        case actionTypes.CHECKED_STATUS_CHANGE:
            {
                let todoItems = deepCopy(state.todoItems);
                todoItems.forEach(item => {
                    if (item.todoID === action.data.todoID) {
                        item.checkedStatus = action.data.checkedStatus;
                    }
                });
                return { ...state, todoItems };
            }

        case actionTypes.COMPLETED_STATUS_CHANGE:
            {
                let todoItems = deepCopy(state.todoItems);
                todoItems.forEach(item => {
                    if (item.todoID === action.data.todoID) {
                        item.completedStatus = !item.completedStatus;
                    }
                });
                return { ...state, todoItems };
            }

        default:
            {
                return state;
            }
    }
}


export default todoReducer; 