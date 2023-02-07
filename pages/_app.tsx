import React from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';

import en from '../lang/en.json';
import uk from '../lang/ua.json';
import { Favicon } from 'components/favicon';
import 'styles/globals.css';
import Head from 'next/head';
interface IMessage {
  [key: string]: string;
}
interface IMessages {
  [key: string]: IMessage;
}
const messages: IMessages = {
  en,
  uk,
};

function MyApp({ Component, pageProps }: AppProps) {
  const { locale, defaultLocale } = useRouter();
  const checkLocal = locale ? locale : 'uk';
  const localeMessage = messages?.[checkLocal] || {};

  return (
    <IntlProvider
      messages={localeMessage}
      defaultLocale={defaultLocale}
      locale={checkLocal}
    >
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <title>Ukrainian institute of underwater research</title>
        <Favicon />
      </Head>
      <Component {...pageProps} />{' '}
    </IntlProvider>
  );
}

export default MyApp;
