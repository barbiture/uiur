import React from 'react'
import type {AppProps} from 'next/app'
import {Favicon} from "components/favicon";
import 'styles/globals.css'
import Head from "next/head";

function MyApp({Component, pageProps}: AppProps) {
    return <>
        <Head>
            <meta charSet="utf-8"/>
            <title>Ukrainian institute of underwater research</title>
            <Favicon/>
        </Head>
        <Component {...pageProps} /> </>
}

export default MyApp
