import React from 'react';
import type { NextPage } from 'next';
import { TopBar } from 'components/top-bar';
import { Form } from 'components/forms';
import { Main } from 'components/main';

const Team: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <header className="bg-brand-blue w-full flex-2">
        <TopBar />
      </header>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-2 sm:px-20 py-8 text-center ">
        <Main />
      </main>
      <footer className="flex flex-col flex-1 items-center justify-center sm:w-1/2 px-5">
        <Form />
      </footer>
    </div>
  );
};

export default Team;
