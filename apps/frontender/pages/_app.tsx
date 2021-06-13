import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactComponent as NxLogo } from '../public/nx-logo-white.svg';
import { createClient, Provider } from 'urql';

const client = createClient({
  url: 'http://localhost:4000/graphql',
});

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <Head>
        <title>Welcome to frontender!</title>
      </Head>
      <div className="app">
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </Provider>
  );
}

export default CustomApp;
