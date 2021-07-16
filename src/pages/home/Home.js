import { makeStyles } from "@material-ui/core";
import React from "react";
import Chart from "../../components/chart/Chart";
import Featured from "../../components/Featured";
import User2 from "../../components/User2";
import Users from "../../components/Users";

const useStyles = makeStyles({
  home: {
    flex: 4,
  },
  users: {
    display: "flex",
  },
});

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.home}>
      <Featured />
      <Chart />
      <div className={classes.users}>
        <Users />
        <User2 />
      </div>
    </div>
  );
}

export default Home;
