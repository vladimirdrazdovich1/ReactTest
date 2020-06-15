import React from "react";
import { makeStyles } from "@material-ui/core";
import backgroundImage from "assets/bg.png";
import LoginModal from "components/LoginModal";

const useStyles = makeStyles(() => ({
  root: {
    width: "100vw",
    height: "100vh",
    background: `url(${backgroundImage}) no-repeat center center`,
    backgroundSize: "cover",
  },
}));

const Login = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <LoginModal isOpen />
    </div>
  );
};

export default Login;
