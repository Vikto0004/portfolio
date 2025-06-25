import clsx from 'clsx';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { FaGithub } from 'react-icons/fa';
import { FiLink } from 'react-icons/fi';

import { Link } from '@/i18n/navigation';
import type { ProjectType } from '@/types/project';

import ProjectList from '../ProjectList/ProjectList';
import css from './Project.module.css';

type Props = {
  project: ProjectType;
};

export default function Project({ project }: Props) {
  const t = useTranslations('Project');
  const DIRECTUS_URL = process.env.NEXT_PUBLIC_DIRECTUS_URL;

  return (
    <section className={css.project}>
      <div className={clsx(css.projectContainer, 'container', 'container-flex')}>
        <div className={css.projectWrapper}>
          <p className={clsx(css.sectionName, 'section-name', 'left')}>
            {project.translations[0].date} | {project.translations[0].author} |{' '}
            {project.translations[0].complexity}
          </p>
          <h2 className={clsx(css.projectTitle, 'title')}>{project.translations[0].title}</h2>
          <p className={clsx(css.projectDescr, 'descr')}>{project.translations[0].description}</p>
          <Link href="/contact" className="primary-btn">
            {t('buttonText')}
          </Link>
        </div>
        <div className="wrapper">
          <Image
            src={`${DIRECTUS_URL}/assets/${project.image}`}
            alt={project.translations[0].alt}
            className={clsx(css.projectImage, 'wrapper-img')}
            width={500}
            height={500}
          />
        </div>
        <div className={css.projectContent}>
          <div className={css.projectDetails}>
            <div className={css.projectDetailsWrap}>
              <h3 className={css.projectSubtitle}>{t('responsibilities')}</h3>
              <ProjectList data={project.translations[0].responsibilities} />
            </div>
            <div className={css.projectDetailsWrap}>
              <h3 className={css.projectSubtitle}>{t('technologies')}</h3>
              <ProjectList data={project.technologies} />
            </div>
          </div>
          <div className={css.projectInfo}>
            <h3 className={css.projectSubtitle}>{t('workSummary')}</h3>
            <p className={clsx(css.projectWorkSummary, 'descr')}>
              {project.translations[0].work_summary}
            </p>
            <div className={css.projectMeta}>
              <Link href={project.github_link} className="link" target="_blank">
                <FaGithub />
                GitHub
              </Link>
              <Link href={project.site_link} className="link" target="_blank">
                <FiLink />
                {t('linkText')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
