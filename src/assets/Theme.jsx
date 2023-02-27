import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#3F4E4F",
      main: "#2C3639",
      //   dark: "#563A3C",
      contrastText: "#1C1C1C",
    },
    secondary: {
      light: "#DCD7C9",
      main: "#fefefe",
      dark: "#A27B5C",
      contrastText: "#fefefe",
    },
    // button: { main: "#FFFDFE" },
    background: {
      default: "#FFFDFE",
      button: "#A27B5C",
    },
  },
  typography: {
    fontFamily: "Work+Sans",
    secondFontFamily: "Neuton",
  },
  breakpoints: {
    values: {
      sm: 600,
      md: 700,
      lg: 1100,
    },
  },
});

export default theme;
