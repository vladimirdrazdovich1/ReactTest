import React from "react";
import { makeStyles, Theme, Button, Typography, Divider, Grid, Icon } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  divider: {
    flex: 1,
    margin: 0,
  },
  separatorOr: {
    margin: theme.spacing(0, 2),
  },
  facebookBtn: {
    flex: 1,
    marginRight: theme.spacing(3),
    background: "#3B5998",
    "&:hover": {
      background: "#3B5998",
    },
    "& .MuiIcon-root": {
      marginRight: theme.spacing(2),
      padding: 0,
    },
  },
  googleBtn: {
    flex: 1,
    marginLeft: theme.spacing(3),
    background: "#EA4335",
    "&:hover": {
      background: "#EA4335",
    },
    "& .MuiIcon-root": {
      marginRight: theme.spacing(2),
    },
  },
}));

const SocialButtons = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container item direction="row" justify="space-around" alignItems="center" xs={12}>
        <Divider variant="middle" className={classes.divider} />
        <Typography variant="h5" className={classes.separatorOr} color="textSecondary">
          Or
        </Typography>
        <Divider variant="middle" className={classes.divider} />
      </Grid>
      <Grid container item justify="space-between" xs={12}>
        <Button variant="contained" color="primary" disableElevation className={classes.facebookBtn}>
          <Icon className="fa fa-facebook-f" />
          Facebook
        </Button>
        <Button variant="contained" color="primary" disableElevation className={classes.googleBtn}>
          <Icon className="fa fa-google" />
          Google
        </Button>
      </Grid>
    </>
  );
};

export default SocialButtons;
