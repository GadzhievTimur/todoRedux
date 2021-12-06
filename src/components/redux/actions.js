export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const DELETE_COMPLETED_TODO = "DELETE_COMPLETED_TODO";
export const SORT_COMPLETED_TODO = "SORT_COMPLETED_TODO";
export const SORT_INCOMPLETED_TODO = "SORT_INCOMPLETED_TODO"

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

export const editTodo = (todo) => {
  return {
    type: EDIT_TODO,
    payload: todo,
  };
};

export const deleteCompletedTodo = (todo) => {
  return {
    type: DELETE_COMPLETED_TODO,
    payload: todo,
  };
};

export const sortCompletedTodo = (todo) => {
  return {
    type: SORT_COMPLETED_TODO,
    payload: todo,
  };
};

export const sortIncompletedTodo = (todo) => {
  return {
    type: SORT_INCOMPLETED_TODO,
    payload: todo,
  };
};