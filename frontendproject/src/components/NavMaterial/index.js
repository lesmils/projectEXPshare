import React, { useState } from "react";

import {
  AppBar,
  makeStyles,
  Tabs,
  Toolbar,
  Tab,
  Typography,
  Button,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";

// import DrawerComponent from "./DrawerComponent/DrawerComponent";
import DrawerComp from "./DrawerComp";
import CategoryIcon from "@mui/icons-material/Category";
import EventIcon from "@mui/icons-material/Event";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import TokenIcon from "@mui/icons-material/Token";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import { useDispatch } from "react-redux";
import { logOut } from "../../store/user/actions";
import { selectUser } from "../../store/user/selectors";
import { useNavigate } from "react-router-dom";
// import SvgIcon from "@mui/material/SvgIcon";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(10),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const useStyles = makeStyles((theme) => ({
  logo: {
    fontSize: "1.9rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.1rem",
    },
  },
  acount: {
    marginLeft: "auto",
    "&:hover": {
      background: "purple",
    },
  },
  tabsContainer: {
    marginLeft: "auto",
  },
  iconLogo: {
    color: "white",
    fontSize: "3rem",
  },
  icons: {
    fontSize: "1.4rem",
  },
}));

export default function NewNavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const token = useSelector(selectToken);
  const classes = useStyles();
  const theme = useTheme();
  const user = useSelector(selectUser);
  const tokenBalance = user.tokenBalance;

  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClickTab = (e, newValue) => {
    setValue(newValue);
  };

  const OpenMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const CloseMenu = () => {
    setAnchorEl(null);
  };
  const CloseMenuLogout = () => {
    setAnchorEl(null);
    dispatch(logOut());
    navigate("/");
  };

  return (
    <>
      <AppBar elevation={0} color="primary">
        <Toolbar>
          <Typography
            style={{
              textDecoration: "none",
              color: "white",
              marginTop: "10px",
            }}
            component={Link}
            to={"/"}
          >
            <h4>EXPshare</h4>
          </Typography>
          {isMatch ? (
            <>{<DrawerComp />}</>
          ) : (
            <>
              <Tabs
                onChange={handleClickTab}
                className={classes.tabsContainer}
                indicatorColor="secondary"
                value={value}
              >
                <Tab
                  disableRipple
                  icon={<CategoryIcon className={classes.icons} />}
                  label="Categories"
                  component={Link}
                  to={"/categories"}
                />

                <Tab
                  disableRipple
                  icon={<EventIcon className={classes.icons} />}
                  label="Live Events"
                  component={Link}
                  to={"/liveevents"}
                />

                <Tab
                  disableRipple
                  icon={<LiveTvIcon className={classes.icons} />}
                  label="Online Events"
                  component={Link}
                  to={"/onlineevents"}
                />

                <Tab
                  icon={<TokenIcon className={classes.icons} />}
                  label={
                    !tokenBalance ? "Tokens" : `Tokenbalance: ${tokenBalance}`
                  }
                  component={Link}
                  to={"/tokens"}
                />
              </Tabs>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              {!token ? (
                <Button
                  disableElevation
                  disableRipple
                  variant="contained"
                  color="secondary"
                  className={classes.acount}
                  component={Link}
                  to={"/login"}
                >
                  Login
                </Button>
              ) : (
                <Button
                  aria-controls="menu"
                  onMouseOver={OpenMenu}
                  className={classes.acount}
                  disableElevation
                  disableRipple
                  variant="contained"
                  color="secondary"
                >
                  Profile
                </Button>
              )}
            </>
          )}
        </Toolbar>
      </AppBar>

      {!token ? (
        " "
      ) : (
        <Menu
          style={{ marginTop: "45px" }}
          id="menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={CloseMenu}
        >
          <MenuItem onClick={CloseMenu} component={Link} to={"/MyPage"}>
            My Account
          </MenuItem>
          <MenuItem onClick={CloseMenu} component={Link} to={"/Messages"}>
            Messages
          </MenuItem>
          <MenuItem onClick={CloseMenu} component={Link} to={"/Settings"}>
            Settings
          </MenuItem>
          <MenuItem onClick={CloseMenuLogout}>Logout</MenuItem>
        </Menu>
      )}
    </>
  );
}
