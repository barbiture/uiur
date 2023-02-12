import React from 'react';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import Link from 'next/link';
import { Logo } from '../logo';
import styles from './tob-bar.module.css';

// interface ITopBar {
//     main?: boolean
// }

const NavItems = () => {
  const router = useRouter();
  const intl = useIntl();
  const currentRoute = router.pathname;
  const navArray: [string, string, number][] = [
    // ['Наші Проекти', '/project', '0'],
    [intl.formatMessage({ id: 'nav.team' }), '/team', 0],
    // ['Зворотній зв`язок', '/contacts', '2'],
  ];
  return (
    <>
      {navArray.map(([title, url, id]) => (
        <Link
          href={url}
          key={id}
          className={`${styles.navLink} ${
            currentRoute === url ? 'text-brand-yellow' : 'text-white'
          }`}
        >
          {title}
        </Link>
      ))}
      <div>
        {[
          { url: 'en-GB', label: 'en', id: 0 },
          { url: 'uk-UA', label: 'ua', id: '1' },
        ].map(({ url, label, id }, index) => {
          return (
            <>
              <Link
                key={id}
                href={router.pathname}
                locale={url}
                className={`${styles.navLink} ${
                  url === router.locale ? 'text-brand-yellow' : 'text-white'
                }`}
              >
                {label}
              </Link>
              {index === 0 ? <span className="text-white"> / </span> : <></>}
            </>
          );
        })}
      </div>
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
    <nav className={styles.nav}>
      <Link href="/" className={styles.logoLink}>
        <Logo width={43} height={44} fill="currentColor" />
        <span className="ml-2 text-xs">
          {intl.formatMessage({ id: 'logo.title.first' })} <br />
          {intl.formatMessage({ id: 'logo.title.second' })}
        </span>
      </Link>
      <div className={styles.navWrapper}>
        <NavItems />
      </div>
    </nav>
  );
};

export default TopBar;
