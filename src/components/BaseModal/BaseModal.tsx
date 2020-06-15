import React, { HTMLAttributes } from "react";
import { Dialog, Typography, makeStyles, Theme } from "@material-ui/core";
import { Close } from "@material-ui/icons";

interface Props extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  titleText: string;
  onClose?: () => void;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  closeIcon: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "flex-end",
    width: "16px",
    height: "16px",
  },
  container: {
    padding: theme.spacing(1),
    "& > *": {
      marginBottom: theme.spacing(2),
    },
  },
}));

const BaseModal = ({ isOpen, titleText, children }: Props) => {
  const classes = useStyles();
  return (
    <Dialog open={isOpen} classes={{ paper: classes.root }}>
      <Close className={classes.closeIcon} color="secondary" />
      <Typography variant="h3" align="center">
        {titleText}
      </Typography>
      <div className={classes.container}>{children}</div>
    </Dialog>
  );
};

export default BaseModal;
