import React from 'react';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import Link from 'next/link';
import { Logo } from '../logo';

// interface ITopBar {
//     main?: boolean
// }

const NavItems = () => {
  const router = useRouter();
  const intl = useIntl();

  console.log(router);
  const currentRoute = router.pathname;
  const navArray = [
    // ['Наші Проекти', '/project', '0'],
    [intl.formatMessage({ id: 'nav.team' }), '/team', '0'],

    // ['Зворотній зв`язок', '/contacts', '2'],
  ];
  console.log('router.pathname', router.pathname);
  return (
    <>
      {navArray.map(([title, url, id]) => (
        <Link
          href={url}
          key={id}
          className={`${
            currentRoute === url ? 'text-brand-yellow' : 'text-white'
          }
               text-center basis-1/4 self-center sm:mx-10 my-5 font-medium hover:text-brand-yellow hover:text-slate-900`}
        >
          {title}
        </Link>
      ))}
      {[...(router?.locales || [])].sort().map((item, index) => {
        return (
          <>
            <Link
              key={item}
              href={router.pathname}
              locale={item}
              className={`${
                item === router.locale ? 'text-brand-yellow' : 'text-white'
              }`}
            >
              {item}
            </Link>
            {index === 0 ? <span className="text-white"> / </span> : <></>}
          </>
        );
      })}
    </>
  );
};
const TopBar = () => {
  const intl = useIntl();

  // if (main) {
  //     return (
  //         <nav className="flex flex-row sm:justify-center justify-around sm:mx-8">
  //             <NavItems/>
  //         </nav>
  //     );
  // }
  return (
    <nav className="flex flex-row justify-between mx-8 items-center p-5">
      <Link
        href="/"
        className="flex items-center hover:text-brand-yellow text-white fill-current w-60"
      >
        <Logo width={43} height={44} fill="currentColor" />
        <span className="ml-2 text-xs">
          {intl.formatMessage({ id: 'logo.title' })}
        </span>
      </Link>
      <div>
        <NavItems />
      </div>
    </nav>
  );
};

export default TopBar;
