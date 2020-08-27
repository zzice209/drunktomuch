import React from 'react';
import AddToDo from './AddTodo';
import TodoList from './TodoList';


const HomePage = (props) => {
    return (
        <div className="todo-app">
            <h2>Todo List</h2>
            <AddToDo />
            <TodoList />
        </div>
    )
}

export default HomePage;
