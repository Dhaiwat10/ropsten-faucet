import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import 'fomantic-ui-css/semantic.min.css';
import '../styles/global.css';
import { initFirebaseApp } from '../lib/firebase';

initFirebaseApp();

function MyApp({ Component, pageProps }: AppProps): React.ReactNode {
  return (
    <>
      <Head>
        <title>Polygon Faucet - M00N City</title>
        <link rel="icon" type="image/png" href="favicon.ico"></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
