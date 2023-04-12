import React from 'react';
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const theme = createTheme({
  palette: {
     primary: {
        main: '#1976d2',
     },
  },
});

const cache = createCache({ key: 'css', prepend: true });

function App({ Component, pageProps } : AppProps) {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
          <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;