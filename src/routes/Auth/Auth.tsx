import React, { useState } from "react";
import { makeStyles, Button, Backdrop } from "@material-ui/core";
import LoginModal from "components/LoginModal";
import SignUpModal from "components/SignUpModal";
import backgroundImage from "assets/bg.png";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    background: `url(${backgroundImage}) no-repeat center center`,
    backgroundSize: "cover",
  },
  btn: {
    color: "white",
    borderColor: "white",
    zIndex: 2000,
    width: 162,
  },
  btnGroup: {
    display: "flex",
    justifyContent: "center",
    paddingTop: theme.spacing(16),
    "& > *:first-child": {
      marginRight: 25,
    },
    "& > *:last-child": {
      marginLeft: 25,
    },
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
      <div className={classes.btnGroup}>
        <Button variant="outlined" size="large" className={classes.btn} onClick={handleClickLogin}>
          Login
        </Button>
        <Button variant="outlined" size="large" className={classes.btn} onClick={handleClickSignUp}>
          Sign Up
        </Button>
        <LoginModal isOpen={isShowLogin} onClose={handleCloseLogin} />
        <SignUpModal isOpen={isShowSignUp} onClose={handleCloseSignUp} />
      </div>
      <Backdrop open />
    </div>
  );
};

export default Login;
