import React from 'react';
import Image from 'next/image'

const ProjectItems = () => {
    return (
        <div className="my-10">
            <div className="flex">
                <div className="flex w-6/12">
                    <div className="flex flex-col h-full">
                        <div className="text-3xl text-blue text-center p-4 flex-1 flex items-center">
                            <p>
                                Вихід із кризових станів викликаних війною через зануреня в поєднанні з роботою
                                психолога
                            </p>
                        </div>
                        <div className="bg-white">
                            <p className="text-sm p-4 font-light">
                                Участниками програми можуть бути особи від 12 до 65 років. Діти до 18 років приймають
                                участь
                                за
                                згодою
                                батьків і можуть проходити разом із батьками. Якщо ви маєте медичні протипоказання - ми
                                погодимо
                                вашу
                                участь з вашим лікарем.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex w-6/12">
                    <Image src="/assets/project/photo-1-1.jpg" width="700" height="400" alt="project-1-1"/>
                </div>
            </div>
            <div className="flex">
                <div className="flex w-6/12">
                    <Image src="/assets/project/photo-1-2.jpg" width="700" height="400" alt="project-1-1"/>
                </div>
                <div className="flex w-6/12 bg-white">
                    <div className="flex flex-col h-full">
                        <div className="text-3xl text-brand-blue text-center p-4 flex-1 flex items-center">
                            <p>
                                Ціль - допомогти людині покращити своє самопочуття емоційне і фізіологічне
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProjectItems;
