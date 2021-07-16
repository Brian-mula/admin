import { makeStyles, Avatar, IconButton, Box } from "@material-ui/core";
import React from "react";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import VisibilityOffOutlinedIcon from "@material-ui/icons/VisibilityOffOutlined";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";

const useStyles = makeStyles({
  root: {
    flex: 2,
  },
  userContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  usercre: {
    display: "flex",
    flexDirection: "column",
  },
  icons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
function Users() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2>Newly Joined Members</h2>
      <Box boxShadow={1} bgcolor="background.paper" m={1} p={2}>
        <div className={classes.userContainer}>
          <Avatar alt="Remy Sharp" src="assets/profile9.jpg" />
          <div className={classes.usercre}>
            <span>Mulati Brian</span>
            <span>Soft Engineer</span>
          </div>
          <div className={classes.icons}>
            <IconButton color="inherit">
              <VisibilityOffOutlinedIcon />
            </IconButton>
            <IconButton color="inherit">
              <EditOutlinedIcon />
            </IconButton>
            <IconButton color="inherit">
              <DeleteOutlinedIcon />
            </IconButton>
          </div>
        </div>
      </Box>
    </div>
  );
}

export default Users;
