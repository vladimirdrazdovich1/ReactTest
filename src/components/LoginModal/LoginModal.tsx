import React, { useState } from "react";
import { useHistory } from "react-router";
import * as Yup from "yup";
import {
  TextField,
  Button,
  Typography,
  Link,
  Grid,
  FormControlLabel,
  Checkbox,
  InputAdornment,
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
  rememberMe: boolean;
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    "& > *": {
      marginBottom: theme.spacing(2),
    },
  },
  showPasswordBtn: {
    backgroundColor: "#F3F5F9",
    borderRadius: 15,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

const validationSchema = Yup.object({
  email: Yup.string().email("Email must be a valid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required")
    .matches(/^(?=.*[a-zA-Z]).+$/, "Password must contain at least 1 alphabetic character")
    .matches(/\d/, "Password must contain at least 1 number"),
  rememberMe: Yup.boolean(),
});

const initialValues = {
  email: "",
  password: "",
  rememberMe: false,
} as ValidationData;

const LoginModal = ({ isOpen, onClose }: Props) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const history = useHistory();

  const classes = useStyles();

  const handleSubmit = () => {
    history.push("/profile");
  };

  const toggleShowingPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

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
          type={isShowPassword ? "text" : "password"}
          variant="outlined"
          placeholder="Password"
          name="password"
          margin="none"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button onClick={toggleShowingPassword} className={classes.showPasswordBtn} disableElevation>
                  Show
                </Button>
              </InputAdornment>
            ),
          }}
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
