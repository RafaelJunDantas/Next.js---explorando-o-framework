import GlobalStyle from '../src/theme/globalStyle'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle/>
      <Component {...pageProps}/>
    </>
  )
}