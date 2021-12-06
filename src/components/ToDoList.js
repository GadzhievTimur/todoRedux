import { Grid, List } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { ToDoFilters } from "./ToDoFilters";
import { ToDoItem } from "./ToDoItem";

export const ToDoList = () => {
  let todo = useSelector((state) => state);
  return (
    <Grid>
      <List>
        {todo.map((todos) => {
          return <ToDoItem key={todos.id} todos={todos} />;
        })}
      </List>
      <Grid>
        <ToDoFilters />
      </Grid>
    </Grid>
  );
};
