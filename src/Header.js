import { Typography } from "@mui/material";
import React from "react";


const styles = {
  mainHead: {
    color: "rgba(175, 47, 47, 0.40)",
    fontSize: "70px"
  }
}

export const Header = () => {

  return (
    <Typography sx={styles.mainHead}>
      Todoshka
    </Typography>
  );
};
