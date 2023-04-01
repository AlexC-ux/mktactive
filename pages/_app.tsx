import '@/styles/globals.css'
import '@/styles/normalize.css'
import { ThemeProvider, createTheme } from '@mui/material';
import type { AppProps } from 'next/app'
import { Montserrat } from 'next/font/google';

const defaultFont = Montserrat({ subsets: ["cyrillic"] })

const theme = createTheme({
  typography: {
    allVariants: {
      ...defaultFont.style
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
