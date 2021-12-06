import { Button, Grid } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { completedFilter, deleteCompletedTodo, allFilter, incompletedFilter } from "./redux/actions";

export const ToDoFilters = ({ todos }) => {
  const dispatch = useDispatch();
  return (
    <Grid>
      <Button onClick={() => dispatch(allFilter(todos))}>All</Button>
      <Button onClick={() => dispatch(completedFilter(todos))}>Complete</Button>
      <Button onClick={() => dispatch(incompletedFilter(todos))}>Incomplete</Button>
      <Button
        sx={{ ml: "7px" }}
        onClick={() => dispatch(deleteCompletedTodo(todos))}
      >
        Clear done
      </Button>
    </Grid>
  );
};
