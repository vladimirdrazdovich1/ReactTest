import React from "react";
import * as Yup from "yup";
import { TextField, Button, Typography, Grid, makeStyles, Theme } from "@material-ui/core";
import { KeyboardBackspace, Refresh } from "@material-ui/icons";
import BaseModal from "components/BaseModal";
import Form from "components/Form";
import Field from "components/Field";

interface Props {
  isOpen: boolean;
  onClose?: () => void;
  onVerify: () => void;
}

type ValidationData = {
  code: string;
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    "& > *": {
      marginBottom: theme.spacing(2),
    },
  },
}));

const validationSchema = Yup.object({
  code: Yup.string().required("Code is required"),
});

const initialValues = {
  code: "",
} as ValidationData;

const CheckEmailModal = ({ isOpen, onClose, onVerify }: Props) => {
  const classes = useStyles();

  const handleSubmit = () => {
    onVerify();
  };

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} titleText="Check your email">
      <Form
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        className={classes.root}
      >
        <Typography align="center">Enter the verification code we sent to your email</Typography>
        <Field variant="outlined" placeholder="Enter code" name="code" margin="none" fullWidth component={TextField} />
        <Button type="submit" variant="contained" color="primary" fullWidth disableElevation>
          Verify
        </Button>
        <Grid container justify="space-between">
          <Button variant="text" color="secondary" onClick={onClose}>
            <KeyboardBackspace />
            Back
          </Button>
          <Button variant="text" color="primary">
            <Refresh />
            Resend code
          </Button>
        </Grid>
      </Form>
    </BaseModal>
  );
};

export default CheckEmailModal;
