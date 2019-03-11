import React from 'react';
import TodoActionBar from './TodoActionBar'
import TodoListContainer from './TodoListContainer'
import styles from '../css/TodoManager.module.css'

class TodoManager extends React.Component {

    state = {
        todoItems: [],
        todoInputTextValue: ''
    };

    constructor(props) {
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
        let todoItems = this.state.todoItems.slice();
        let todoText = this.state.todoInputTextValue;
        if (todoText) {
            let todoID = Date.now();
            todoItems.push({ todoID: todoID, todoText: todoText, checkedStatus: false, completedStatus: false });
            this.setState({ todoItems: todoItems, todoInputTextValue: '' });
        }
    }

    selectDeselectAll() {
        let todoItems = this.state.todoItems.slice();
        if (todoItems[0]) {
            let check = !todoItems[0].checkedStatus;
            todoItems.map((item) => {
                item.checkedStatus = check;
                return true;
            });
            this.setState({ todoItems: todoItems })
        }
    }

    deleteSelected() {
        let todoItems = this.state.todoItems.slice();
        todoItems = todoItems.filter((item) => {
            return !item.checkedStatus;
        });
        this.setState({ todoItems: todoItems });
    }

    deleteCompleted() {
        let todoItems = this.state.todoItems.slice();
        todoItems = todoItems.filter((item) => {
            return !item.completedStatus;
        });
        this.setState({ todoItems: todoItems });
    }

    deleteItem(event) {
        let todoItems = this.state.todoItems.slice();
        let itemID = parseInt(event.target.closest('[todo-id]').getAttribute('todo-id'));
        todoItems = todoItems.filter(item => {
            return item.todoID !== itemID;
        });
        this.setState({ todoItems: todoItems })
    }

    handleInputTextChange(event) {
        this.setState({ todoInputTextValue: event.target.value });
    }

    handleCheckedStatusChange(event) {
        let todoItems = this.state.todoItems.slice();
        let itemID = parseInt(event.target.closest('[todo-id]').getAttribute('todo-id'));
        todoItems.map(item => {  //use binary Search using id??? or linear search with break for future proofing?
            if (item.todoID === itemID) {
                item.checkedStatus = event.target.checked;
            }
            return true;
        });
        this.setState({ todoItems: todoItems })
    }

    handleCompletedStatusChange(event) {
        let todoItems = this.state.todoItems.slice();
        let itemID = parseInt(event.target.closest('[todo-id]').getAttribute('todo-id'));
        todoItems.map(item => { /*GENERALIZE? */ //use binary Search using id??? or linear search with break for future proofing?
            if (item.todoID === itemID) {
                item.completedStatus = !item.completedStatus;
            }
            return true;
        });
        this.setState({ todoItems: todoItems })
    }

    render() {
        return (
            <div className={styles['todo-manager']}>
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