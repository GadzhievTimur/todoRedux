import {
  Button,
  Checkbox,
  Grid,
  Input,
  ListItem,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "./redux/actions";

export const ToDoItem = ({ todos }) => {
  const [tempVal, setTempVal] = useState("");
  const [editable, setEditable] = useState(false);
  const dispatch = useDispatch();
  return (
    <Grid>
      <ListItem style={{ justifyContent: "center" }}>
        <Checkbox
          onClick={() => {
            todos.completed = !todos.completed;
          }}
        />
        {editable ? (
          <Input
            style={{ width: "284px" }}
            autoFocus
            value={tempVal}
            onChange={(e) => setTempVal(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                if (tempVal.trim()) {
                  dispatch(editTodo({ ...todos, title: tempVal }));
                  setEditable(false);
                  setTempVal("");
                } else {
                  setEditable(false);
                }
              }
            }}
            placeholder={todos.title}
          />
        ) : (
          <Typography className={`$task-{todos.completed}`}
            style={{ textAlign: "center", width: "284px" }}
            onDoubleClick={() => {
              if (editable) {
                setTempVal(todos.title);
              }
              setEditable(true);
            }}
          >
            {todos.title}
          </Typography>
        )}

        <Button onClick={() => dispatch(deleteTodo(todos.id))}> X </Button>
      </ListItem>
    </Grid>
  );
};
