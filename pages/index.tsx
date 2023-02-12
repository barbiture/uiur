import React from 'react';
import { TopBar } from 'components/top-bar';
import { ProjectItems } from 'components/project-item';

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-brand-blue">
      <header className="bg-brand-blue w-full flex-2 md:px-10 px-5">
        <TopBar />
      </header>
      <ProjectItems />
    </div>
  );
};

export default Home;
