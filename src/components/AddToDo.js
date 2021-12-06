import { Button, Grid, Input } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { addTodo } from "./redux/actions";

export const AddTodo = () => {
  const [tempVal, setTempVal] = useState("");
  let dispatch = useDispatch();
  const handleSubmit = (e) => {
    if (tempVal.trim()) {
      if (e.keyCode === 13) {
        dispatch(addTodo({ id: v4(), title: tempVal, completed: false }));
        setTempVal("");
      }
    }
  };
  return (
    <Grid>
      <Input
        style={{ width: "24%" }}
        autoFocus
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
