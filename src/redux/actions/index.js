import axios from 'axios'
import { ADDNEW_TODO, GETALL_TODOS, TOGGLE_TODO, UPDATE_TODO, DELETE_TODO, TOGGLE_TAB } from './type'


// const API_URL = 'http://localhost:8000';
// const API_URL = process.env.API_URL;

<<<<<<< HEAD
const API_URL = "https://mern-todo-assignment-leadzen-api.onrender.com"
=======
const API_URL = "https://mern-todo-assignment-leadzen-api.onrender.com";
>>>>>>> c91a34632c36ec25fde3bffd722457be4f6843dc

//API for adding new todo
export const addNewTodo = (data) => async (dispatch) => {
    try {
        const res = await axios.post(`${API_URL}/todos`, { data });

        dispatch({ type: ADDNEW_TODO, payload: res.data });
    } catch (error) {
        console.log("Error while calling addNewTodo API ", error.message);
    }

}

//API for displaying all todos
export const getAllTodos = () => async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/alltodos`);

        dispatch({ type: GETALL_TODOS, payload: res.data });
    } catch (error) {
        console.log("Error while calling getAllTodos API ", error.message);
    }
}

//API for togelling done or not
export const toggleTodoDone = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/alltodos/${id}`);


        dispatch({ type: TOGGLE_TODO, payload: res.data });
    } catch (error) {
        console.log("Error while calling toggleTodoDone API ", error.message);
    }
}

//API for updating the specific todo
export const updateTodo = (id, data) => async (dispatch) => {
    try {
        const res = await axios.put(`${API_URL}/alltodos/${id}`, { data });

        dispatch({ type: UPDATE_TODO, payload: res.data });
    } catch (error) {
        console.log("Error while calling updateTodo API ", error.message);
    }
}
//API for delete todo
export const deleteTodo = (id) => async (dispatch) => {
    try {
        const res = await axios.delete(`${API_URL}/alltodos/${id}`);

        dispatch({ type: DELETE_TODO, payload: res.data });
    } catch (error) {
        console.log("Error while calling deleteTodo API ", error.message);
    }
}

export const toggleTabs = (tab) => async (dispatch) => {
    dispatch({type: TOGGLE_TAB, selected: tab})
}
