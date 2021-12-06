import { Grid, List } from "@mui/material";
import { useSelector } from "react-redux";
import { ToDoFilters } from "./ToDoFilters";
import { ToDoItem } from "./ToDoItem";

export const ToDoList = () => {
  const filteredTodos = useSelector((state) => state.filteredTodos);
  return (
    <Grid>
      <List>
        {filteredTodos.map((todo) => {
          return <ToDoItem key={todo.id} todo={todo} />;
        })}
      </List>
      <Grid>
        <ToDoFilters />
      </Grid>
    </Grid>
  );
};
