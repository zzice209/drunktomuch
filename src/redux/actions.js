import { ADD_TODO, FETCH_USERS_SUCCESS } from './actionTypes';
// import { fetchUserSuccess } from "./reducers/todos";
import axios from "axios";

let nextTodoId = 0;

const fetchUserSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}


export const addTodo = content => ({
    type: ADD_TODO,
    payload: {
        id: ++nextTodoId,
        content
    }
})

// export const fetchUserSuccess = users => {
//     return {
//         type: FETCH_USERS_SUCCESS,
//         payload: users
//     }
// }

export const fetchUsers = () => {
    return (dispatch) => {
      axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
        const users = response.data;
        dispatch(fetchUserSuccess(users));
      });
    };
  };