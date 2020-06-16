import React, { HTMLAttributes } from "react";
import { Typography, makeStyles, Theme, Paper } from "@material-ui/core";
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
    alignSelf: "center",
    justifyContent: "center",
    zIndex: theme.zIndex.modal,
  },
  closeIcon: {
    display: "flex",
    marginLeft: "auto",
    width: "16px",
    height: "16px",
  },
  titleText: {
    marginBottom: theme.spacing(4),
  },
}));

const BaseModal = ({ isOpen, onClose, titleText, children }: Props) => {
  const classes = useStyles();

  if (!isOpen) return null;

  return (
    <Paper classes={{ root: classes.root }}>
      <Close className={classes.closeIcon} color="secondary" onClick={onClose} />
      <Typography variant="h3" align="center" className={classes.titleText}>
        {titleText}
      </Typography>
      <div>{children}</div>
    </Paper>
  );
};

export default BaseModal;
