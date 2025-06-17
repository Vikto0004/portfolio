import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import { useTranslations } from 'next-intl';
import { FaGithub } from 'react-icons/fa';
import { FiLink } from 'react-icons/fi';

import { Link } from '@/i18n/navigation';
import { useValidLang } from '@/utils/hooks';

import ProjectList from '../ProjectList/ProjectList';

import css from './Project.module.css';

type ProjectTranslations = {
  title: string;
  date: string;
  alt: string;
  description: string;
  author: string;
  complexity: string;
  workSummary: string;
  responsibilities: string[];
};

export type Project = {
  id: string;
  authorTag: 'solo' | 'team';
  complexityTag: 'medium' | 'high' | 'low';
  dateISO: string;
  image: string | StaticImageData;
  siteLink: string;
  githubLink: string;
  technologies: string[];
  translations: {
    [key: string]: ProjectTranslations;
  };
};

type Props = {
  project: Project;
};

export default function Project({ project }: Props) {
  const t = useTranslations('Project');
  const lang = useValidLang();

  return (
    <section className={css.project}>
      <div className={clsx(css.projectContainer, 'container', 'container-flex')}>
        <div className={css.projectWrapper}>
          <p className={clsx(css.sectionName, 'section-name', 'left')}>
            {project.translations[lang].date} | {project.translations[lang].author} |{' '}
            {project.translations[lang].complexity}
          </p>
          <h2 className={clsx(css.projectTitle, 'title')}>{project.translations[lang].title}</h2>
          <p className={clsx(css.projectDescr, 'descr')}>
            {project.translations[lang].description}
          </p>
          <Link href="/contact" className="primary-btn">
            {t('buttonText')}
          </Link>
        </div>
        <div className="wrapper">
          <Image
            src={project.image}
            alt={project.translations[lang].alt}
            className={clsx(css.projectImage, 'wrapper-img')}
            width={500}
            height={500}
          />
        </div>
        <div className={css.projectContent}>
          <div className={css.projectDetails}>
            <div className={css.projectDetailsWrap}>
              <h3 className={css.projectSubtitle}>{t('responsibilities')}</h3>
              <ProjectList data={project.translations[lang].responsibilities} />
            </div>
            <div className={css.projectDetailsWrap}>
              <h3 className={css.projectSubtitle}>{t('technologies')}</h3>
              <ProjectList data={project.technologies} />
            </div>
          </div>
          <div className={css.projectInfo}>
            <h3 className={css.projectSubtitle}>{t('workSummary')}</h3>
            <p className={clsx(css.projectWorkSummary, 'descr')}>
              {project.translations[lang].workSummary}
            </p>
            <div className={css.projectMeta}>
              <Link href={project.githubLink} className="link">
                <FaGithub />
                GitHub
              </Link>
              <Link href={project.siteLink} className="link">
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
