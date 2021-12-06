import { Button, Grid } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteCompletedTodo, sortCompletedTodo, sortIncompletedTodo } from "./redux/actions";

export const ToDoFilters = ({ todos }) => {
  const dispatch = useDispatch();
  return (
    <Grid>
      <Button>All</Button>
      <Button
      onClick={() => dispatch(sortCompletedTodo(todos))}
      >Complete</Button>
      <Button
       onClick={() => dispatch(sortIncompletedTodo(todos))}
      >Incomplete</Button>
      <Button
        style={{ marginLeft: "8px" }}
        onClick={() => dispatch(deleteCompletedTodo(todos))}
      >
        Clear done
      </Button>
    </Grid>
  );
};
