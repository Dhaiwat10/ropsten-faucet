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
        {/* Global site tag (gtag.js) - Google Analytics  */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ENWJRZPE6L"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-ENWJRZPE6L');
        `,
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
