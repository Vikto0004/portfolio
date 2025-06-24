import clsx from 'clsx';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation';
import type { Project } from '@/types/project';
import { useValidLang } from '@/utils/hooks/valid-lang';

import css from './ProjectsList.module.css';

type PropsType = {
  projects: Project[];
};

export default function ProjectsList({ projects }: PropsType) {
  const t = useTranslations('Projects');
  const lang = useValidLang();

  const DIRECTUS_URL = process.env.NEXT_PUBLIC_DIRECTUS_URL;

  return (
    <ul className={css.list}>
      {projects.map((project) => {
        const translation = project.translations.find((t) => t.locale === lang);

        if (!translation) {
          return <p key={project.id}>Translation not found</p>;
        }

        return (
          <li key={project.id} className={css.item}>
            <div className={css.itemWrapper}>
              <div className={css.itemInfo}>
                <p className={css.itemDate}>{translation.date} </p>
                <p className={css.itemAuthor}>{translation.author}</p>
                <p className={css.itemComplexity}>{translation.complexity}</p>
              </div>
              <Image
                src={`${DIRECTUS_URL}/assets/${project.image}`}
                alt={translation.alt}
                width={300}
                height={200}
                className={css.itemImage}
              />
            </div>
            <div className={css.itemContent}>
              <h3 className={clsx(css.itemContentSubtitle, 'subtitle')}>{translation.title}</h3>
              <p className={clsx(css.itemContentDescr, 'descr')}>{translation.description}</p>
              <Link href={`/projects/${project.id}`} className={clsx(css.itemContentLink, 'link')}>
                {t('linkText')}
              </Link>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
