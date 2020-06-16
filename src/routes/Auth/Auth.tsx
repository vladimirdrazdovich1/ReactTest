import React, { useState } from "react";
import { makeStyles, Button, Grid } from "@material-ui/core";
import LoginModal from "components/LoginModal";
import SignUpModal from "components/SignUpModal";
import backgroundImage from "assets/bg.png";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    background: `url(${backgroundImage}) no-repeat center center`,
    backgroundSize: "cover",
    boxSizing: "border-box",
    overflowY: "auto",
  },
  grid: {
    padding: theme.spacing(8),
    minHeight: "100%",
  },
  btn: {
    color: "white",
    borderColor: "white",
    width: 162,
  },
  btnGroup: {
    display: "flex",
    marginBottom: theme.spacing(8),
    justifyContent: "center",
    zIndex: theme.zIndex.modal - 1,
    "& > *:first-child": {
      marginRight: 25,
    },
    "& > *:last-child": {
      marginLeft: 25,
    },
  },
  dimming: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: "fixed",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: theme.zIndex.modal - 2,
  },
  modal: {
    zIndex: theme.zIndex.modal,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
}));

const Login = () => {
  const [isShowLogin, setIsShowLogin] = useState(false);
  const [isShowSignUp, setIsShowSignUp] = useState(true);

  const classes = useStyles();

  const handleClickLogin = () => {
    setIsShowLogin(true);
    setIsShowSignUp(false);
  };

  const handleClickSignUp = () => {
    setIsShowSignUp(true);
    setIsShowLogin(false);
  };

  const handleCloseLogin = () => {
    setIsShowLogin(false);
  };

  const handleCloseSignUp = () => {
    setIsShowSignUp(false);
  };

  return (
    <div className={classes.root}>
      <div className={classes.dimming} />
      <Grid
        container
        item
        direction="column"
        justify="center"
        alignItems="center"
        wrap="nowrap"
        className={classes.grid}
      >
        <div className={classes.btnGroup}>
          <Button variant="outlined" size="large" className={classes.btn} onClick={handleClickLogin}>
            Login
          </Button>
          <Button variant="outlined" size="large" className={classes.btn} onClick={handleClickSignUp}>
            Sign Up
          </Button>
        </div>
        <div className={classes.modal}>
          <LoginModal isOpen={isShowLogin} onClose={handleCloseLogin} />
          <SignUpModal isOpen={isShowSignUp} onClose={handleCloseSignUp} onOpen={handleClickSignUp} />
        </div>
      </Grid>
    </div>
  );
};

export default Login;
