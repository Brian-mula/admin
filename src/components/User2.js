import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    flex: 3,
  },
});

function User2() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h2>User Two</h2>
    </div>
  );
}

export default User2;
