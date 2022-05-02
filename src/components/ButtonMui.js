import { Button, Checkbox, TextField, ThemeProvider,makeStyles, Container } from "@material-ui/core";
import React from "react";

function ButtonMui({ label, backgroundcolor = 'white', size = 'md', handleClick }) {
  let scale = 1;
  if (size === 'sm') scale = 0.75;
  if (size === 'lg') scale = 1.5;
  const style = {
    backgroundcolor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: 'none',
    height: '30px',
    width: '25px !important',
  };
  return (
    <Button onClick={handleClick} style={style}>
      {label}
    </Button>
  );
}

  export default ButtonMui