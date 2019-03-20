export function addItem() {
    return {
        type: 'ADD_ITEM',
        data: { todoID: Date.now() }
    };
}

export function deleteItem(todoID) {
    return {
        type: 'DELETE_ITEM',
        data: { todoID }
    };
}

export function deleteSelected() {
    return {
        type: 'DELETE_SELECTED'
    };
}

export function deleteCompleted() {
    return {
        type: 'DELETE_COMPLETED'
    };
}

export function selectDeselectAll() {
    return {
        type: 'SELECT_DESELECT_ALL'
    };
}

export function handleInputTextChange(inputText) {
    return {
        type: 'INPUT_TEXT_CHANGE',
        data: { inputText }
    };
}

export function handleCheckedStatusChange(todoID, checkedStatus) {
    return {
        type: 'CHECKED_STATUS_CHANGE',
        data: { todoID, checkedStatus }
    };
}

export function handleCompletedStatusChange(todoID) {
    return {
        type: 'COMPLETED_STATUS_CHANGE',
        data: { todoID }
    };
}
