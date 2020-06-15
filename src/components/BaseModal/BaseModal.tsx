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
    width: "100%",
    maxWidth: 500,
    boxSizing: "border-box",
  },
  closeIcon: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "flex-end",
    width: "16px",
    height: "16px",
  },
  titleText: {
    marginBottom: theme.spacing(4),
  },
}));

const BaseModal = ({ isOpen, titleText, children }: Props) => {
  const classes = useStyles();
  return (
    <Dialog open={isOpen} classes={{ paper: classes.root }}>
      <Close className={classes.closeIcon} color="secondary" />
      <Typography variant="h3" align="center" className={classes.titleText}>
        {titleText}
      </Typography>
      <div>{children}</div>
    </Dialog>
  );
};

export default BaseModal;
