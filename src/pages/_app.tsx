import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Boilerplate</title>
        <link
          rel="shortcut icon"
          href="/img/boilerplate-logo.svg"
          type="image/x-icon"
        />
        <link
          rel="apple-touch-icon"
          href="/img/boilerplate-logo.svg"
          type="image/x-icon"
        />
        <meta
          name="description"
          content="A boilerplate to started projects with NextJS, typescript adn Styled-components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
