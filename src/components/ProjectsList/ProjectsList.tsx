import clsx from 'clsx';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation';
import { useValidLang } from '@/utils/hooks/valid-lang';

import { projectsData } from '../data/projectsData';

import css from './ProjectsList.module.css';

export default function ProjectsList() {
  const t = useTranslations('Projects');
  const lang = useValidLang();

  return (
    <ul className={css.list}>
      {projectsData.map((project) => (
        <li key={project.id} className={css.item}>
          <div className={css.itemWrapper}>
            <div className={css.itemInfo}>
              <p className={css.itemDate}>{project.translations[lang].date} </p>
              <p className={css.itemAuthor}>{project.translations[lang].author}</p>
              <p className={css.itemComplexity}>{project.translations[lang].complexity}</p>
            </div>
            <Image
              src={project.image}
              alt={project.translations[lang].alt}
              width={300}
              height={200}
              className={css.itemImage}
            />
          </div>
          <div className={css.itemContent}>
            <h3 className={clsx(css.itemContentSubtitle, 'subtitle')}>
              {project.translations[lang].title}
            </h3>
            <p className={clsx(css.itemContentDescr, 'descr')}>
              {project.translations[lang].description}
            </p>
            <Link href={`/projects/${project.id}`} className={clsx(css.itemContentLink, 'link')}>
              {t('linkText')}
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
}
