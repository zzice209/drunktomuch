import React, {useEffect} from "react";
import { connect } from "react-redux";
import { getTodos } from "../../redux/selectors";
import { fetchUsers } from "../../redux/actions";

const TodoList = ({ todos, fetchUsers }) => {
  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])
  return (
    <ul className="todo-list">
      {todos && todos.length
        ? todos.map((todo, index) => {
            return <li key={`todo-${todo.id}`}>{todo.content}</li>;
          })
        : "No todos, yay!"}
    </ul>
  );
};

const mapStateToProps = state => {
  const todos = state.todos;
  // const todos = getTodos(state);
  console.log(state)
  return { todos }; 
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
