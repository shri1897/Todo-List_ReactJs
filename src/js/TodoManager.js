import React from 'react';
import TodoActionBar from './TodoActionBar'
import TodoListContainer from './TodoListContainer'
import classes from '../css/TodoManager.module.css'

class TodoManager extends React.Component {

    state = {   //Inside Constructor?
        todoItems: [],
        todoInputTextValue: ''
    };

    constructor(props) {    //Use arrow functions instead of binding??
        super(props);

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.selectDeselectAll = this.selectDeselectAll.bind(this);
        this.deleteSelected = this.deleteSelected.bind(this);
        this.deleteCompleted = this.deleteCompleted.bind(this);
        this.handleInputTextChange = this.handleInputTextChange.bind(this);
        this.handleCheckedStatusChange = this.handleCheckedStatusChange.bind(this);
        this.handleCompletedStatusChange = this.handleCompletedStatusChange.bind(this);
    }

    addItem() {
        let todoItems = [...this.state.todoItems];
        let todoText = this.state.todoInputTextValue;
        if (todoText) {
            todoItems.push({
                todoID: Date.now(),
                todoText: todoText,
                checkedStatus: false,
                completedStatus: false
            });
            this.setState({ todoItems, todoInputTextValue: '' });
        }
    }

    selectDeselectAll() {
        let todoItems = [...this.state.todoItems];
        if (todoItems[0]) {
            let checkUncheck = !todoItems[0].checkedStatus;
            todoItems.forEach((item) => {
                item.checkedStatus = checkUncheck;
            });
            this.setState({ todoItems });
        }
    }

    deleteSelected() {
        let todoItems = this.state.todoItems.filter((item) => {
            return !item.checkedStatus;
        });
        this.setState({ todoItems });
    }

    deleteCompleted() {
        let todoItems = this.state.todoItems.filter((item) => {
            return !item.completedStatus;
        });
        this.setState({ todoItems });
    }

    deleteItem(todoID) {
        let todoItems = this.state.todoItems.filter(item => {
            return item.todoID !== todoID;
        });
        this.setState({ todoItems });
    }

    handleInputTextChange(event) {
        this.setState({ todoInputTextValue: event.target.value });
    }

    handleCheckedStatusChange(event, todoID) {
        let todoItems = [...this.state.todoItems];
        todoItems.forEach(item => {
            if (item.todoID === todoID) {
                item.checkedStatus = event.target.checked;
            }
        });
        this.setState({ todoItems });
    }

    handleCompletedStatusChange(todoID) {
        let todoItems = [...this.state.todoItems]
        todoItems.forEach(item => {
            if (item.todoID === todoID) {
                item.completedStatus = !item.completedStatus;
            }
        });
        this.setState({ todoItems });
    }

    render() {
        return (
            <div className={classes['todo-manager']}>
                < TodoActionBar
                    textValue={this.state.todoInputTextValue}
                    handleInputTextChange={this.handleInputTextChange}
                    addItem={this.addItem}
                    selectDeselectAll={this.selectDeselectAll}
                    deleteSelected={this.deleteSelected}
                    deleteCompleted={this.deleteCompleted}
                />
                < TodoListContainer
                    todoItems={this.state.todoItems}
                    handleCheckedStatusChange={this.handleCheckedStatusChange}
                    handleCompletedStatusChange={this.handleCompletedStatusChange}
                    deleteItem={this.deleteItem}
                />
            </div>
        );
    }
}

export default TodoManager;