import React from "react";
import * as Yup from "yup";
import {
  TextField,
  Button,
  Typography,
  Link,
  Grid,
  FormControlLabel,
  Checkbox,
  makeStyles,
  Theme,
} from "@material-ui/core";
import BaseModal from "components/BaseModal";
import SocialButtons from "components/SocialButtons";
import Form from "components/Form";
import Field from "components/Field";

interface Props {
  isOpen: boolean;
  onClose?: () => void;
}

type ValidationData = {
  email: string;
  password: string;
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    "& > *": {
      marginBottom: theme.spacing(2),
    },
  },
}));

const validationSchema = Yup.object({
  email: Yup.string().email("Email must be a valid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required")
    .matches(/^(?=.*[a-zA-Z]).+$/, "Password must contain at least 1 alphabetic character")
    .matches(/\d/, "Password must contain at least 1 number"),
});

const initialValues = {
  email: "",
  password: "",
} as ValidationData;

const LoginModal = ({ isOpen, onClose }: Props) => {
  const classes = useStyles();

  const handleSubmit = () => {};

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} titleText="Login">
      <Form
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        className={classes.root}
      >
        <Field
          variant="outlined"
          placeholder="Email Address"
          name="email"
          margin="none"
          fullWidth
          component={TextField}
        />
        <Field
          type="password"
          variant="outlined"
          placeholder="Password"
          name="password"
          margin="none"
          fullWidth
          component={TextField}
        />
        <FormControlLabel control={<Checkbox name="rememberMe" color="primary" size="medium" />} label="Remember me" />
        <Button type="submit" variant="contained" color="primary" fullWidth disableElevation>
          Login
        </Button>
        <Grid container justify="center">
          <Link href="#" variant="subtitle2" color="textSecondary">
            Forgot password
          </Link>
        </Grid>
        <SocialButtons />
        <Typography variant="h5" align="center">
          Don&apos;t have an account?{" "}
          <Link href="#" color="primary">
            Sign up
          </Link>
        </Typography>
      </Form>
    </BaseModal>
  );
};

export default LoginModal;
