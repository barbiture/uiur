import React from 'react';
import Image from 'next/image';
import { useIntl } from 'react-intl';

const Main = () => {
  const intl = useIntl();
  return (
    <>
      <Image
        src="/assets/logo_main.svg"
        width={93}
        height={94}
        alt="logo_main"
      />
      <h1 className="text-3xl font-medium font-body text-brand-blue mt-5">
        {intl.formatMessage({ id: 'logo.title.first' })} <br />
        {intl.formatMessage({ id: 'logo.title.second' })}
      </h1>

      <p className="mt-5 text-1xl lg:w-2/5 font-thin font-body">
        {intl.formatMessage({ id: 'page.team.description' })}
      </p>
    </>
  );
};

export default Main;
