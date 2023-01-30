import type {NextPage} from 'next'
import Head from 'next/head'
import {TopBar} from 'components/top-bar'
import {Form} from 'components/forms'
import {Main} from "components/main";

const Home: NextPage = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center">
            <Head>
                <title>Ukrainian institute of underwater research</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <header className="bg-brand-blue w-full flex-2">
                <TopBar/>
            </header>
            <main className="flex w-full flex-1 flex-col items-center justify-center px-20 py-8 text-center ">
                <Main/>
            </main>
            <footer className="flex flex-col flex-1 h-24 items-center justify-center w-1/2">

                <Form/>
            </footer>
        </div>
    )
}

export default Home
