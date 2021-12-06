import { Button, Grid, Input } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { addTodo } from "./redux/actions";

const styles = {
  input: {
    width: "70.5%",
  },
};

export const AddTodo = () => {
  const [tempVal, setTempVal] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    if (tempVal.trim()) {
      if (e.keyCode === 13) {
        dispatch(addTodo({ id: v4(), title: tempVal, completed: false }));
        setTempVal("");
      }
    }
  };

  return (
    <Grid container justifyContent="center">
      <Input
      autoFocus
        sx={styles.input}
        placeholder={"What do you wanna do?"}
        value={tempVal}
        onChange={(e) => setTempVal(e.target.value)}
        onKeyDown={handleSubmit}
      />
      <Button
        onClick={() => {
          if (tempVal.trim()) {
            dispatch(addTodo({ id: v4(), title: tempVal, completed: false }));
            setTempVal("");
          }
        }}
      >
        Add
      </Button>
    </Grid>
  );
};
