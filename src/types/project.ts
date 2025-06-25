import type { StaticImageData } from 'next/image';

import type { LangType } from '@/i18n/routing';

export type ProjectTranslations = {
  id: number;
  project_id: string;
  locale: LangType;
  title: string;
  date: string;
  alt: string;
  description: string;
  author: string;
  complexity: string;
  work_summary: string;
  responsibilities: string[];
};

export type ProjectType = {
  id: string;
  author_tag: 'solo' | 'team';
  complexity_tag: 'medium' | 'high' | 'low';
  date_iso_: string;
  image: string | StaticImageData;
  site_link: string;
  github_link: string;
  technologies: string[];
  translations: ProjectTranslations[];
};
