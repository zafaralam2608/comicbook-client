import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import Layout from './Layout';

const Application = () => {
  const theme = createTheme({
    palette: {
      type: 'dark',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
};

export default Application;
