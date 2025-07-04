import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      middle: 680,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: "#606c38",
    },
    secondary: {
      main: "#283618",
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 1000px  #F4F6F0 inset",
            boxShadow: "0 0 0 1000px  #F4F6F0 inset",
            WebkitTextFillColor: "#2C2D29",
          },
        },
      },
    },
  },
});

export default theme;
