import { createTheme } from '@mui/material/styles';

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
  
 // palette: {
 //   primary: {
 //     main: '#606c38',--color-moss-500
 //   },
 //   secondary: {
 //     main: '#dda15e',--color-chocolate-500
 //   },
 // },
});

export default theme;
