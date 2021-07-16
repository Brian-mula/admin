import { makeStyles } from "@material-ui/core";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import Home from "./pages/home/Home";

const useStyles = makeStyles({
  container: {
    display: "flex",
  },
});
function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <TopBar />
      <div className={classes.container}>
        <SideBar />
        <Home />
      </div>
    </div>
  );
}

export default App;
