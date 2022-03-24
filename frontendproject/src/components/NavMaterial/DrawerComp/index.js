import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemIcon,
  IconButton,
  ListItemText,
  makeStyles,
  Drawer,
} from "@material-ui/core";
import Menu from "@mui/icons-material/Menu";
import { selectToken } from "../../../store/user/selectors";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../../store/user/actions";

export default function DrawerComp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(selectToken);
  const useStyles = makeStyles((theme) => ({
    drawerContainer: {},
    iconButtonContainer: {
      marginLeft: "auto",
      color: "white",
    },

    menuIconToggle: {
      fontSize: "3rem",
    },
  }));

  const CloseMenuLogout = () => {
    setOpenDrawer(false);
    dispatch(logOut());
    navigate("/");
  };

  const CloseMenuLogin = () => {
    setOpenDrawer(false);
    navigate("/login");
  };

  const [openDrawer, setOpenDrawer] = useState(false);

  const classes = useStyles();

  return (
    <>
      <Drawer
        anchor="right"
        classes={{ paper: classes.drawerContainer }}
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
        onOpen={() => setOpenDrawer(true)}
      >
        <List>
          <ListItem divider button onClick={() => setOpenDrawer(false)}>
            <Link
              to={"/categories"}
              style={{ textDecoration: "none", color: "grey" }}
            >
              <ListItemIcon>
                <ListItemText> Categories</ListItemText>
              </ListItemIcon>
            </Link>
          </ListItem>

          <ListItem divider button onClick={() => setOpenDrawer(false)}>
            <Link
              to={"/liveevents"}
              style={{ textDecoration: "none", color: "grey" }}
            >
              <ListItemIcon>
                <ListItemText> Live Events</ListItemText>
              </ListItemIcon>
            </Link>
          </ListItem>

          <ListItem divider button onClick={() => setOpenDrawer(false)}>
            <Link
              to={"/onlineevents"}
              style={{ textDecoration: "none", color: "grey" }}
            >
              <ListItemIcon>
                <ListItemText> Online Events</ListItemText>
              </ListItemIcon>
            </Link>
          </ListItem>

          <ListItem divider button onClick={() => setOpenDrawer(false)}>
            <Link
              to={"/tokens"}
              style={{ textDecoration: "none", color: "grey" }}
            >
              <ListItemIcon>
                <ListItemText> Tokens</ListItemText>
              </ListItemIcon>
            </Link>
          </ListItem>
          {!token ? (
            <ListItem divider button onClick={() => CloseMenuLogin(false)}>
              <ListItemIcon>
                <ListItemText> Login</ListItemText>
              </ListItemIcon>
            </ListItem>
          ) : (
            <ListItem divider button onClick={() => CloseMenuLogout(false)}>
              <ListItemIcon>
                <ListItemText> Log Out</ListItemText>
              </ListItemIcon>
            </ListItem>
          )}
        </List>
      </Drawer>
      <IconButton
        className={classes.iconButtonContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <Menu className={classes.menuIconToggle} />
      </IconButton>
    </>
  );
}
