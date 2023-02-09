import React from 'react';
import type {AppProps} from 'next/app';
import {useRouter} from 'next/router';
import {IntlProvider} from 'react-intl';

import en from '../lang/en.json';
import uk from '../lang/ua.json';
// import {Favicon} from 'components/favicon';
import 'styles/globals.css';
import Head from 'next/head';
import Script from "next/script";
import * as process from "process";

// import Script from "next/script";

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

function MyApp({Component, pageProps}: AppProps) {
    const {locale, defaultLocale} = useRouter();
    const checkLocal = locale ? locale : 'uk';
    const localeMessage = messages?.[checkLocal] || {};

    return (
        <IntlProvider
            messages={localeMessage}
            defaultLocale={defaultLocale}
            locale={checkLocal}
        >
            <Head>
                <title>Ukrainian institute of underwater research</title>
                <meta charSet="utf-8"/>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
                />
            </Head>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Script id="google-tag-manager" strategy="afterInteractive">
                {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer',${process.env.GTM});
      `}
            </Script>
            <Component {...pageProps} />
        </IntlProvider>
    );
}

export default MyApp;
