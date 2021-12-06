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
import { deleteTodo, editTodo, checkTodo } from "./redux/actions";

export const ToDoItem = ({ todo }) => {
  const [tempVal, setTempVal] = useState("");
  const [editable, setEditable] = useState(false);
  const dispatch = useDispatch();
  const styles = {
    input: {
      textAlign: "center",
      width: "100%",
    },
    root: {
      textAlign: "center",
      width: "100%",
    },
    checkbox: {
      ml: 2.5,
    },
    delBtn: {
      ml: -2.6,
    },
  };

  return (
    <Grid>
      <ListItem sx={styles.root}>
        <Checkbox
          checked={todo.completed}
          sx={styles.checkbox}
          onClick={() => {
            dispatch(checkTodo(todo.id));
          }}
        />
        {editable ? (
          <Input
            sx={styles.input}
            autoFocus
            value={tempVal}
            onChange={(e) => setTempVal(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                if (tempVal.trim()) {
                  dispatch(editTodo({ ...todo, title: tempVal }));
                  setEditable(false);
                  setTempVal("");
                } else {
                  setEditable(false);
                }
              }
            }}
            placeholder={todo.title}
          />
        ) : (
          <Typography
            sx={{
              overflowWrap: "break-word",
              minWidth: "70.75%",
              maxWidth: "70.75%",
            }}
            onDoubleClick={() => {
              if (editable) {
                setTempVal(todo.title);
              }
              setEditable(true);
            }}
          >
            {todo.title}
          </Typography>
        )}

        <Button
          sx={styles.delBtn}
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          X
        </Button>
      </ListItem>
    </Grid>
  );
};
