'use client';

import clsx from 'clsx';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useEffect, useMemo, useState } from 'react';

import { Link } from '@/i18n/navigation';
import type { Project } from '@/types/project';
import { useValidLang } from '@/utils/hooks/valid-lang';

import Loader from '../Loader/Loader';
import ProjectsList from '../ProjectsList/ProjectsList';
import ProjectsNav from '../ProjectsNav/ProjectsNav';

import css from './Projects.module.css';

type PropsType = {
  ProjectsPage?: boolean;
};

export default function Projects({ ProjectsPage }: PropsType) {
  const t = useTranslations('Projects');
  const lang = useValidLang();
  const searchParams = useSearchParams();

  const page = useMemo(() => Number(searchParams.get('page') || '1'), [searchParams]);
  const limit = useMemo(() => Number(searchParams.get('limit') || '6'), [searchParams]);

  const [totalPages, setTotalPages] = useState(1);
  const [projects, setProjects] = useState<Project[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);

      try {
        let url = `api/projects?page=${page}&limit=${limit}`;

        if (!ProjectsPage) {
          url = `${lang}/api/projects?page=1&limit=2`;
        }

        const res = await fetch(url);
        const data = await res.json();

        setProjects(data.data);
        setTotalPages(Math.ceil(data.meta.filter_count / limit));
      } catch (err) {
        console.error('Failed to fetch projects', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [page, limit, ProjectsPage, lang]);

  return (
    <section className={css.projects}>
      <div className={clsx(css.container, 'container')}>
        <div className="content-center">
          <p className="section-name">{t('sectionName')}</p>
          <h2 className="title">{t('title')}</h2>
          <p className="descr">{t('description')}</p>
        </div>

        {loading && <Loader overlay={false} />}
        {!loading && projects && <ProjectsList projects={projects} />}

        {ProjectsPage && !loading && totalPages !== 1 && (
          <ProjectsNav totalPages={totalPages} page={page} limit={limit} />
        )}

        {!ProjectsPage && !loading && (
          <Link className={clsx(css.link, 'primary-btn')} href="/projects">
            {t('buttonText')}
          </Link>
        )}
      </div>
    </section>
  );
}
