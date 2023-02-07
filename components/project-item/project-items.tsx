import React from 'react';
import Image from 'next/image';
import { useIntl } from 'react-intl';

type Props = {
  children: React.ReactNode;
};
const Item = ({ children }: Props) => {
  return <div className="flex sm:w-6/12">{children}</div>;
};
const Wrapper = ({ children }: Props) => (
  <div className="flex sm:flex-row flex-col"> {children} </div>
);
const ItemTextJoin = ({ children }: Props) => (
  <div className="flex flex-col h-full">{children}</div>
);

const ProjectItems = () => {
  const intl = useIntl();
  return (
    <div className="my-10">
      <Wrapper>
        <Item>
          <ItemTextJoin>
            <div className="text-3xl text-blue text-center p-4 flex-1 flex items-center">
              <p>{intl.formatMessage({ id: 'page.project.pts.title' })}</p>
            </div>
            <div className="bg-white">
              <p className="text-md p-4 font-light">
                {intl.formatMessage({ id: 'page.project.pts.ageRestrictions' })}
              </p>
            </div>
          </ItemTextJoin>
        </Item>
        <Item>
          <Image
            src="/assets/project/photo-1-1.jpg"
            width={751}
            height={425}
            className="object-contain relative w-full object-left-bottom"
            alt="project-1-1"
          />
        </Item>
      </Wrapper>
      <Wrapper>
        <Item>
          <Image
            src="/assets/project/photo-1-2.jpg"
            width={810}
            height={473}
            className="object-contain relative w-full object-right-top"
            alt="project-1-2"
          />
        </Item>
        <Item>
          <div className="flex flex-col h-full bg-white">
            <div className="text-3xl text-brand-blue text-center p-4 flex-1 flex items-center">
              <p>
                {intl.formatMessage({ id: 'page.project.pts.goal.title' })}{' '}
                <br />
                {intl.formatMessage({
                  id: 'page.project.pts.goal.description',
                })}
              </p>
            </div>
          </div>
        </Item>
      </Wrapper>
    </div>
  );
};

export default ProjectItems;
