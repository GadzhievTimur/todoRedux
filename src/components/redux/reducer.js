import {
  ADD_TODO,
  DELETE_COMPLETED_TODO,
  DELETE_TODO,
  EDIT_TODO,
  SHOW_ALL_TODOS,
  SHOW_COMPLETED_TODOS,
  SHOW_INCOMPLETED_TODOS,
  CHECK_TODO,
} from "./actions";
import { initialState } from "./states";

export const reducer = (state = initialState, action) => {
  let newTodo = [...state.todos];
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...newTodo, action.payload],
        filteredTodos: [...newTodo, action.payload],
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: newTodo.filter((todos) => todos.id !== action.payload),
        filteredTodos: newTodo.filter((todos) => todos.id !== action.payload),
      };

    case CHECK_TODO:
      const checkTodo = newTodo.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });

      return {
        ...state,
        todos: checkTodo,
        filteredTodos: checkTodo,
      };

    case EDIT_TODO:
      let index = -1;
      for (let i = 0; i < newTodo.length; i++) {
        index++;
        if (newTodo[i].id === action.payload.id) {
          break;
        }
      }
      if (index !== -1) {
        newTodo[index] = action.payload;
        return {
          ...state,
          todos: [...newTodo],
          filteredTodos: [...newTodo],
        };
      }
      break;

    case DELETE_COMPLETED_TODO:
      return {
        ...state,
        todos: newTodo.filter((todo) => todo.completed === false),
        filteredTodos: newTodo.filter((todo) => todo.completed === false),
      };

    case SHOW_ALL_TODOS:
      return {
        ...state,
        todos: state.todos,
        filteredTodos: state.todos,
        filter: "all",
      };

    case SHOW_COMPLETED_TODOS:
      return {
        ...state,
        filteredTodos: state.todos.filter((todo) => todo.completed === true),
        filter: "completed",
      };

    case SHOW_INCOMPLETED_TODOS:
      return {
        ...state,
        filteredTodos: newTodo.filter((todo) => todo.completed === false),
        filter: "incompleted",
      };

    default:
      return state;
  }
};
