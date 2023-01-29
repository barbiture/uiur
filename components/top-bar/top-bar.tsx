import React from 'react';
import Link from "next/link";

const TopBar = () => {
    const navArray = [
        ['Наші Проекти', '/project', '0'],
        ['Команда', '/team', '1'],
        ['Зворотній зв`язок', '/contacts', '2'],
    ]
    return (
        <nav className="flex flex-row sm:justify-center mx-8">
            {navArray.map(([title, url, id]) => (
                <Link href={url}
                      key={id}
                      className="text-center basis-1/4 self-center mx-10 my-5 text-white font-medium hover:text-brand-yellow hover:text-slate-900">{title}</Link>
            ))}
        </nav>
    );
};

export default TopBar;
