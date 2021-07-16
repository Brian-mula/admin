import { makeStyles } from "@material-ui/core";
import React from "react";
import Chart from "../../components/chart/Chart";
import Featured from "../../components/Featured";

const useStyles = makeStyles({
  home: {
    flex: 4,
  },
});

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.home}>
      <Featured />
      <Chart />
    </div>
  );
}

export default Home;
