import GlobalStyle from "../src/components/theme/globalStyle";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle/>
      <Component {...pageProps}/>
    </>
  )
}