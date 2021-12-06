export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const DELETE_COMPLETED_TODO = "DELETE_COMPLETED_TODO";
export const SHOW_ALL_TODOS = "SHOW_ALL_TODOS";
export const SHOW_COMPLETED_TODOS = "SHOW_COMPLETED_TODOS";
export const SHOW_INCOMPLETED_TODOS = "SHOW_INCOMPLETED_TODOS";
export const CHECK_TODO = "CHECK_TODO";

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const deleteTodo = (todoId) => {
  return {
    type: DELETE_TODO,
    payload: todoId,
  };
};

export const editTodo = (todoId) => {
  return {
    type: EDIT_TODO,
    payload: todoId,
  };
};

export const deleteCompletedTodo = (todo) => {
  return {
    type: DELETE_COMPLETED_TODO,
    payload: todo,
  };
};

export const allFilter = (todoFilter) => {
  return {
    type: SHOW_ALL_TODOS,
    payload: todoFilter,
  };
};

export const completedFilter = (todoFilter) => {
  return {
    type: SHOW_COMPLETED_TODOS,
    payload: todoFilter,
  };
};

export const incompletedFilter = (todoFilter) => {
  return {
    type: SHOW_INCOMPLETED_TODOS,
    payload: todoFilter,
  };
};

export const checkTodo = (todoCheck) => {
  return {
    type: CHECK_TODO,
    payload: todoCheck,
  };
};
