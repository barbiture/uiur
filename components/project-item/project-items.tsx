import React from 'react';
import Image from 'next/image';
import { useIntl } from 'react-intl';
import { Form } from '../forms';

type Props = {
  children: React.ReactNode;
  isRevers?: boolean;
};
const Item = ({ children }: Props) => {
  return <div className="flex lg:w-6/12">{children}</div>;
};
const Wrapper = ({ children, isRevers }: Props) => (
  <div
    className={`flex lg:flex-row ${isRevers ? 'flex-col-reverse' : 'flex-col'}`}
  >
    {' '}
    {children}{' '}
  </div>
);
const ItemTextJoin = ({ children }: Props) => (
  <div className="flex flex-col h-full">{children}</div>
);
type Program = Array<{ title: string; description: string; id: number }>;
const program: Program = [
  {
    title: 'page.project.pts.team.title',
    description: 'page.project.pts.team.description',
    id: 0,
  },
  {
    title: 'page.project.pts.expertise.title',
    description: 'page.project.pts.expertise.description',
    id: 1,
  },
  {
    title: 'page.project.pts.technical.title',
    description: 'page.project.pts.technical.description',
    id: 2,
  },
  {
    title: 'page.project.pts.fixation.title',
    description: 'page.project.pts.fixation.description',
    id: 3,
  },
  {
    title: 'page.project.pts.duration.title',
    description: 'page.project.pts.duration.description',
    id: 4,
  },
];
const ProjectItems = () => {
  const intl = useIntl();
  return (
    <div>
      <Wrapper isRevers={false}>
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
      <Wrapper isRevers={true}>
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
      <Form typePage="home" />
      {program.map(({ title, description, id }) => {
        return (
          <div
            key={id}
            className="p-10 text-white font-thin border-b-2 border-color-blue"
          >
            <h4 className="text-3xl mb-6">
              {' '}
              {intl.formatMessage({ id: title })}{' '}
            </h4>
            <p>{intl.formatMessage({ id: description })}</p>
          </div>
        );
      })}

      <div className="p-10 text-white font-thin border-b-1 border-color-white">
        <h4 className="text-3xl mb-6">
          {intl.formatMessage({ id: 'page.project.pts.expertise.title' })}{' '}
        </h4>
        <p>
          {intl.formatMessage({ id: 'page.project.pts.expertise.description' })}
        </p>
      </div>
    </div>
  );
};

export default ProjectItems;
