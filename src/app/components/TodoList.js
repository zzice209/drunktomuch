import React, {useEffect} from "react";
import { connect } from "react-redux";
import { getTodos, getUsers } from "../../redux/selectors";
import { fetchUsers } from "../../redux/actions";

const TodoList = ({ todos, users, fetchUsers }) => {
  
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers])  

  return (
    <div>
    <ul className="todo-list">
      {todos && todos.length
        ? todos.map((todo, index) => {
            return <li key={`todo-${todo.id}`}>{todo.content}</li>;
          })
        : "No todos, yay!"}
    </ul>
    <ul className="users-list">
       {users && users.length 
          ? users.map((user, index) => {
            return <li key={index}>{user.name}</li>;
          }): "No users, heehee"}
    </ul>
    </div>
  );
};

const mapStateToProps = state => {
  const todos = getTodos(state);
  console.log(todos)
  const users = getUsers(state);
  console.log(users);
  return {todos, users}; 
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(TodoList);
