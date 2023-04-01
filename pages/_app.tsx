import '@/styles/globals.css'
import '@/styles/normalize.css'
import { ThemeProvider, createTheme } from '@mui/material';
import type { AppProps } from 'next/app'

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'unset',
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
}
