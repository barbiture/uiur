import React from 'react';
import Image from 'next/image'

const Main = () => {
    return (
        <>
            <Image src="/assets/logo_main.svg" width={93} height={94} alt="logo_main"/>
            <h1 className="text-3xl font-medium font-body text-brand-blue mt-5">
                Український Інститут <br/>
                Підводних Досліджень
            </h1>

            <p className="mt-5 text-1xl w-2/5 font-thin font-body">
                Ми інституція по організації та підтримці наукових і дослідницьких проектів в рамках підводних
                занурень і суміжних з ними темами.

                На час веденя війни України проти агресії російської федерації ми в першу чергу обʼєднання
                спціалвстів із областей дайвінгу, психології, медицини, освіти, економіки, юриспруденції для
                провадження програм реабілітації людей, які постраждали внаслідок війни.
            </p>
        </>
    );
};

export default Main;
