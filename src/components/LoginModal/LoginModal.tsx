import React from "react";
import { TextField, Button, Typography, Link, Grid, FormControlLabel, Checkbox } from "@material-ui/core";

import BaseModal from "components/BaseModal";
import SocialButtons from "components/SocialButtons";

interface Props {
  isOpen: boolean;
  onClose?: () => void;
}

const LoginModal = ({ isOpen, onClose }: Props) => {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} titleText="Login">
      <TextField placeholder="Email Address" variant="outlined" fullWidth />
      <TextField placeholder="Password" variant="outlined" fullWidth />
      <div>
        <FormControlLabel control={<Checkbox name="rememberMe" color="primary" size="medium" />} label="Remember me" />
      </div>
      <Button variant="contained" color="primary" fullWidth disableElevation>
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
    </BaseModal>
  );
};

export default LoginModal;
