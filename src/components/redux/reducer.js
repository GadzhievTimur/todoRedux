import {
  ADD_TODO,
  DELETE_COMPLETED_TODO,
  DELETE_TODO,
  EDIT_TODO,
  SORT_COMPLETED_TODO,
  SORT_INCOMPLETED_TODO,
} from "./actions";
import { todo } from "./states";

export const reducer = (state = todo, action) => {
  let newTodo;
  switch (action.type) {
    case ADD_TODO:
      newTodo = [...state];
      newTodo.push(action.payload);
      return newTodo;

    case DELETE_TODO:
      newTodo = [...state];
      newTodo = newTodo.filter((todos) => todos.id !== action.payload);
      return newTodo;

    case EDIT_TODO:
      newTodo = [...state];
      let index = -1;
      for (let i = 0; i < newTodo.length; i++) {
        index++;
        if (newTodo[i].id === action.payload.id) {
          break;
        }
      }
      if (index !== -1) {
        newTodo[index] = action.payload;
        return newTodo;
      }
      break;

    case SORT_COMPLETED_TODO:
      newTodo = [...state];
      newTodo = newTodo.sort((todo) => todo.completed === true);
      return newTodo;


    case SORT_INCOMPLETED_TODO:
      newTodo = [...state];
      newTodo = newTodo.sort((todo) => todo.completed === false);
      return 

    case DELETE_COMPLETED_TODO:
      newTodo = [...state];
      newTodo = newTodo.filter((todo) => todo.completed === false);
      return newTodo;

    default:
      return state;
  }
};
