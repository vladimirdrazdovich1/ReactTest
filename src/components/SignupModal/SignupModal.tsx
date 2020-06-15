import React, { useState } from "react";
import * as Yup from "yup";
import { TextField, Button, Typography, Link, InputAdornment, makeStyles, Theme } from "@material-ui/core";
import BaseModal from "components/BaseModal";
import SocialButtons from "components/SocialButtons";
import Form from "components/Form";
import Field from "components/Field";
import { useHistory } from "react-router";
import CheckEmailModal from "components/CheckEmailModal";

interface Props {
  isOpen: boolean;
  onClose?: () => void;
}

type ValidationData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    "& > *": {
      marginBottom: theme.spacing(2),
    },
  },
  twoCols: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "nowrap",
    width: "100%",
    "& > *:first-child": {
      marginRight: 10,
    },
    "& > *:last-child": {
      marginLeft: 10,
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
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Email must be a valid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required")
    .matches(/^(?=.*[a-zA-Z]).+$/, "Password must contain at least 1 alphabetic character")
    .matches(/\d/, "Password must contain at least 1 number"),
});

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
} as ValidationData;

const SignUpModal = ({ isOpen, onClose }: Props) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmation, setIsShowConfirmation] = useState(false);

  const history = useHistory();

  const classes = useStyles();

  const handleSubmit = () => {
    setIsShowConfirmation(true);
  };

  const handleCloseConfirmation = () => {
    setIsShowConfirmation(false);
  };

  const onVerifyCode = () => {
    handleCloseConfirmation();
    history.push("/profile");
  };

  const toggleShowingPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} titleText="Sign up">
      <Form
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        className={classes.root}
      >
        <div className={classes.twoCols}>
          <Field
            variant="outlined"
            placeholder="First Name"
            name="firstName"
            margin="none"
            fullWidth
            component={TextField}
          />
          <Field
            variant="outlined"
            placeholder="Last Name"
            name="lastName"
            margin="none"
            fullWidth
            component={TextField}
          />
        </div>
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
        <Button type="submit" variant="contained" color="primary" fullWidth disableElevation>
          Sign Up
        </Button>
        <SocialButtons />
        <Typography variant="h5" align="center">
          Already have an account?{" "}
          <Link href="#" color="primary">
            Login
          </Link>
        </Typography>
      </Form>
      <CheckEmailModal isOpen={isShowConfirmation} onClose={handleCloseConfirmation} onVerify={onVerifyCode} />
    </BaseModal>
  );
};

export default SignUpModal;
