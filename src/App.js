import { Grid } from "@mui/material";
import { AddTodo } from "./components/AddToDo";
import { ToDoList } from "./components/ToDoList";
import { Header } from "./Header";

function App() {
  return (
    <Grid container textAlign="center" justifyContent="center">
      <Grid item sx={{ width: "25%" }}>
        <Header />
        <AddTodo />
        <ToDoList />
      </Grid>
    </Grid>
  );
}

export default App;
