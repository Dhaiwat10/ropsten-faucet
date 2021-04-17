import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import 'semantic-ui-css/semantic.min.css'

function MyApp({ Component, pageProps }: AppProps): React.ReactNode {
  return (
    <>
      <Head>
        <title>Ropsten Faucet</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
