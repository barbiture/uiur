import React from 'react';
import Image from 'next/image';
import { useIntl } from 'react-intl';
import styles from './project-item.module.css';
import { Form } from '../forms';

type Props = {
  children: React.ReactNode;
  isRevers?: boolean;
};
const Item = ({ children }: Props) => {
  return <div className="flex w-full lg:w-6/12">{children}</div>;
};
const Wrapper = ({ children, isRevers }: Props) => (
  <div
    className={`flex lg:flex-row ${isRevers ? 'flex-col-reverse' : 'flex-col'}`}
  >
    {children}{' '}
  </div>
);
const ItemTextJoin = ({ children }: Props) => (
  <div className="flex flex-col h-full">{children}</div>
);
type Program = Array<{
  title: string;
  description: string;
  id: number;
  href?: string;
}>;
const program: Program = [
  {
    title: 'page.project.pts.team.title',
    description: 'page.project.pts.team.description',
    href: '/team',
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
const Heading = ({ children }: Props) => (
  <div className="text-blue p-10 flex-1 flex items-center">{children}</div>
);

const ProjectItems = () => {
  const intl = useIntl();
  return (
    <div>
      <Wrapper isRevers={false}>
        <Item>
          <ItemTextJoin>
            <Heading>
              <h1 className={`${styles.headingTitle} text-white`}>
                {intl.formatMessage({ id: 'page.project.pts.title' })}
              </h1>
            </Heading>
            <div className="border border-white">
              <p
                className="2xl:!pl-5 lg:!pl-10 p-4 text-base lg:text-xs !leading-relaxed tracking-widest text-md text-white"
                style={{ lineHeight: '2.5rem' }}
              >
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
          <div className="flex flex-col h-full bg-white w-full">
            {/*<div className="p-4 flex-1 flex items-center">*/}
            <Heading>
              <p className="line-height text-2xl 2xl:text-5xl !leading-relaxed prose line-height text-2xl 2xl:text-5xl !leading-relaxed prose text-brand-blue">
                {intl.formatMessage({ id: 'page.project.pts.goal.title' })}
                {' -'}
                <br />
                {intl.formatMessage({
                  id: 'page.project.pts.goal.description',
                })}
              </p>
            </Heading>
            {/*</div>*/}
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
              {intl.formatMessage({ id: title })}
            </h4>
            <p>{intl.formatMessage({ id: description })}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectItems;
