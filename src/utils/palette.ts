import { colors } from "@material-ui/core";

const white = "#FFFFFF";
export const basicBlue = "#2D6CC0";
export const basicGray = "#747984";
export const lightGray = "#D7DCE2";
export const softBlack = "#393B41";

const palette = {
  primary: {
    contrastText: basicGray,
    dark: basicBlue,
    main: basicBlue,
    light: basicBlue,
  },
  secondary: {
    contrastText: basicGray,
    dark: basicGray,
    main: basicGray,
    light: lightGray,
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: "#F02849",
    light: colors.red[400],
  },
  text: {
    primary: softBlack,
    secondary: basicGray,
    link: colors.blue[600],
  },
  link: colors.blue[800],
  icon: colors.blueGrey[600],
  background: {
    default: basicGray,
    paper: white,
  },
  divider: lightGray,
  white,
};

export type AppPalette = typeof palette;

export default palette;
