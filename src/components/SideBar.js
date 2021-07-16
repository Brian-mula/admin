import {
  List,
  ListItem,
  makeStyles,
  Typography,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import React from "react";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import AccountTreeOutlinedIcon from "@material-ui/icons/AccountTreeOutlined";

const width = "50px";
const useStyles = makeStyles({
  sidebar: {
    flex: 1,
    height: `calc(100% - ${width})px`,
    position: "sticky",
    top: 50,
  },
});
function SideBar() {
  const classes = useStyles();
  const links = [
    {
      text: "Home",
      icon: <HomeOutlinedIcon />,
    },
    {
      text: "Users",
      icon: <PersonOutlineOutlinedIcon />,
    },
    {
      text: "Settings",
      icon: <SettingsOutlinedIcon />,
    },
    {
      text: "Plans",
      icon: <AccountTreeOutlinedIcon />,
    },
  ];
  return (
    <div className={classes.sidebar}>
      <Typography variant="h6">Admin Dashboard</Typography>
      <List>
        {links.map((link) => (
          <ListItem button key={link.text}>
            <ListItemIcon>{link.icon}</ListItemIcon>
            <ListItemText>{link.text}</ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default SideBar;
