import { Html, Head, Main, NextScript } from 'next/document'
import {CssBaseline} from "@mui/material"

export default function Document() {
  return (
    <Html lang="ru">
      <Head >
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap" rel="stylesheet"/>
      </Head>
      <body>
        <Main />
        <NextScript />
        <CssBaseline/>
      </body>
    </Html>
  )
}
