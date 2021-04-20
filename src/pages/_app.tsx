import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import 'semantic-ui-css/semantic.min.css';
import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps): React.ReactNode {
  return (
    <>
      <Head>
        <title>Ropsten Faucet</title>
        <link rel="icon" type="image/png" href="eth32.png"></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
