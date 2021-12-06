import { Grid } from "@mui/material";
import { AddTodo } from "./components/AddTodo";
import { ToDoList } from "./components/ToDoList";
import { Header } from "./Header";

function App() {
  return (
    <Grid textAlign="center" justifyContent="center">
      <Header />
      <AddTodo />
      <ToDoList />
    </Grid>
  );
}

export default App;
