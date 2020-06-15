import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";
import palette, { AppPalette } from "./palette";

export type AppTheme = ThemeOptions & { palette: AppPalette };

const theme: AppTheme = {
  palette,
  typography: {
    fontFamily: "Muli",
    h1: {
      color: palette.text.primary,
      fontFamily: "Muli, Sans-serif",
      fontWeight: 600,
      fontSize: "35px",
      letterSpacing: "0.25px",
      lineHeight: "40px",
    },
    h2: {
      color: palette.text.primary,
      fontFamily: "Muli, Sans-serif",
      fontWeight: 600,
      fontSize: "29px",
      letterSpacing: "0.25px",
      lineHeight: "32px",
    },
    h3: {
      color: palette.text.primary,
      fontFamily: "Muli, Sans-serif",
      fontWeight: 500,
      fontSize: "24px",
      letterSpacing: "0.25px",
      lineHeight: "26px",
    },
    h4: {
      color: palette.text.primary,
      fontFamily: "Muli, Sans-serif",
      fontWeight: 500,
      fontSize: "20px",
      letterSpacing: "0.25px",
      lineHeight: "24px",
    },
    h5: {
      color: palette.text.primary,
      fontFamily: "Muli, Sans-serif",
      fontWeight: 500,
      fontSize: "16px",
      letterSpacing: "0.25px",
      lineHeight: "20px",
    },
    h6: {
      color: palette.text.primary,
      fontWeight: 500,
      fontSize: "14px",
      letterSpacing: "0.25px",
      lineHeight: "20px",
    },
    subtitle1: {
      color: palette.text.primary,
      fontFamily: "Muli, Sans-serif",
      fontWeight: 400,
      fontSize: "22px",
      letterSpacing: "0.25px",
      lineHeight: "0.25px",
    },
    subtitle2: {
      color: palette.text.secondary,
      fontWeight: 400,
      fontSize: "14px",
      letterSpacing: "0.25px",
      lineHeight: "21px",
    },
    body1: {
      color: palette.text.primary,
      fontFamily: "Muli, Sans-serif",
      fontWeight: 400,
      fontSize: "14px",
      letterSpacing: "0.25px",
      lineHeight: "21px",
    },
    body2: {
      color: palette.text.secondary,
      fontFamily: "Muli, Sans-serif",
      fontWeight: 400,
      fontSize: "12px",
      letterSpacing: "0.25px",
      lineHeight: "18px",
    },
    button: {
      color: palette.text.primary,
      fontFamily: "Muli, Sans-serif",
      fontSize: "14px",
    },
    caption: {
      color: palette.text.secondary,
      fontSize: "11px",
      letterSpacing: "0.33px",
      lineHeight: "13px",
    },
    overline: {
      color: palette.text.secondary,
      fontSize: "11px",
      fontWeight: 500,
      letterSpacing: "0.25px",
      lineHeight: "13px",
    },
  },
  overrides: {
    MuiOutlinedInput: {
      root: {
        borderRadius: 3,
      },
      input: {
        padding: 14,
      },
      notchedOutline: {
        borderColor: "#DADCE0",
      },
      error: {
        "&.MuiFormHelperText-root.Mui-error": {
          marginLeft: 0,
        },
      },
    },
    MuiFormHelperText: {
      contained: {
        marginLeft: 0,
      },
    },
    MuiButton: {
      root: {
        fontWeight: 700,
        textTransform: "initial",
      },
      containedPrimary: {
        color: palette.white,
      },
      contained: {
        boxShadow: "none",
        fontWeight: 700,
        "&$disabled": {
          color: palette.white,
          backgroundColor: "#CBD7E0",
        },
      },
      text: {
        fontWeight: 400,
      },
    },
    MuiCheckbox: {
      root: {
        color: "#DADCE0",
        borderRadius: 3,
      },
    },
  },
};

export default theme;
