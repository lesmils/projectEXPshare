import React from "react";
// import "./index.css";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://www.creativeclique.co.za/wp-content/uploads/2019/01/Material-Design-Background-Undesigns-00.jpg')`,
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",

    fontSize: "4rem",
    color: "#fff",
  },
  animation: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "600px",
    width: "33.333%",
    textAlign: "center",
  },
  startButton: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    height: "600px",
    width: "33.333%",
    textAlign: "center",
  },
  button: {
    background: "purple",
    width: "300px",
    height: "500px",
    textAlign: "center",
    margin: "auto",
    marginTop: "500px",
  },
  heroTwo: {
    backgroundColor: "purple",
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",

    fontSize: "4rem",
    color: "#fff",
  },
}));

export default function Home() {
  const classes = useStyles();
  const { token } = useSelector(selectUser);
  console.log("token?", token);
  return (
    <div>
      <Box className={classes.hero}>
        <Box className={classes.animation}>EXPShare</Box>
        <Box className={classes.startButton}>
          <Button
            margin="auto"
            height="300px"
            disableElevation
            disableRipple
            variant="contained"
            color="secondary"
            className={classes.button}
            component={Link}
            to={"/signup"}
          >
            <h5>Start Learning Now</h5>
          </Button>
        </Box>
      </Box>
      <Box className={classes.heroTwo}></Box>
      <div className="hero-container-one"></div>
    </div>
  );
}
