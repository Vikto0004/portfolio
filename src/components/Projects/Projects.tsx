import clsx from 'clsx';
import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation';

import { Project } from '../Project/Project';
import ProjectsList from '../ProjectsList/ProjectsList';

import css from './Projects.module.css';

type PropsType = {
  projects?: Project[];
  ProjectsPage?: boolean;
};

export default function Projects({ projects, ProjectsPage }: PropsType) {
  const t = useTranslations('Projects');

  return (
    <section className={css.projects}>
      <div className={clsx(css.container, 'container')}>
        <div className="content-center">
          <p className="section-name">{t('sectionName')}</p>
          <h2 className="title">{t('title')}</h2>
          <p className="descr">{t('description')}</p>
        </div>
        {projects && <ProjectsList projects={projects} />}
        {!ProjectsPage && (
          <Link className={clsx(css.link, 'primary-btn')} href="/projects">
            {t('buttonText')}
          </Link>
        )}
      </div>
    </section>
  );
}
