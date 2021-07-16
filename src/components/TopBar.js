import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Badge, IconButton, Avatar } from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";

const useStyles = makeStyles({
  topbar: {
    width: "100%",
    height: "50px",
    backgroundColor: "#e3f2fd",
    position: "sticky",
    top: 0,
    zIndex: 999,
  },
  topbarWrapper: {
    height: "100%",
    padding: "0px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  topbarRight: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: "30px",
    color: "#0d47a1",
    cursor: "pointer",
  },
  avatar: {
    margin: "8px",
    cursor: "pointer",
  },
});
function TopBar() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.topbar}>
        <div className={classes.topbarWrapper}>
          <div className="topbarLeft">
            <span className={classes.logo}>MulatiAdmin</span>
          </div>
          <div className={classes.topbarRight}>
            <Typography variant="h6">
              <span>Welcome Admin</span>
            </Typography>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Avatar
              alt="Remy Sharp"
              src="assets/admin.jpeg"
              className={classes.avatar}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
