'use client';

import { ThemeProvider } from '@mui/material/styles';
import theme from '@/assets/styles/theme'; 

export default function MuiClientThemeProvider({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
} 