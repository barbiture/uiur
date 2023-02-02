import React from 'react';
import {useRouter} from 'next/router';
import Link from "next/link";
import Image from "next/image";
import {Logo} from "../logo";

interface ITopBar {
    main?: boolean
}

const NavItems = () => {
    const router = useRouter();
    const currentRoute = router.pathname;
    const navArray = [
        ['Наші Проекти', '/project', '0'],
        ['Команда', '/team', '1'],
        ['Зворотній зв`язок', '/contacts', '2'],
    ]
    return <>{navArray.map(([title, url, id]) => (
        <Link href={url}
              key={id}
              className={`${currentRoute === url ? 'text-brand-yellow' : 'text-white'} text-center basis-1/4 self-center mx-10 my-5 font-medium hover:text-brand-yellow hover:text-slate-900`}>{title}</Link>
    ))
    }</>
}
const TopBar = ({main = false}: ITopBar) => {

    if (main) {
        return (
            <nav className="flex flex-row sm:justify-center mx-8">
                <NavItems/>
            </nav>
        );
    }
    return (
        <nav className="flex flex-row justify-between mx-8 items-center p-5">
            <Link href="/" className="flex items-center hover:text-brand-yellow text-white fill-current">
                <Logo
                    width={43} height={44} fill="currentColor"
                />
                <span className="ml-2 text-xs">
                    Український Інститут <br/>Підводних Досліджень
                </span>
            </Link>
            <div>
                <NavItems/>
            </div>
        </nav>
    )
};

export default TopBar;
