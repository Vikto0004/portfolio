import { env } from 'process';

import { Project } from '@/components/Project/Project';
import { LangType } from '@/i18n/routing';

type ProjectsResponse = {
  data: Project[];
  meta: {
    filter_count: number;
    total_count: number;
    page: number;
    limit: number;
  };
};

const baseUrl = process.env.NEXT_PUBLIC_DIRECTUS_URL;

export async function getProjects(lang: LangType, page = 1, limit = 10): Promise<ProjectsResponse> {
  const urlObj = new URL(`${baseUrl}/items/projects`);

  urlObj.searchParams.set('fields', '*,translations.*');
  urlObj.searchParams.set('deep[translations][filter][locale][_eq]', lang);
  urlObj.searchParams.set('page', page.toString());
  urlObj.searchParams.set('limit', limit.toString());
  urlObj.searchParams.set('meta', 'total_count,filter_count');

  const res = await fetch(urlObj.toString(), { next: { revalidate: 60 } });

  if (!res.ok) {
    const errorText = await res.text();
    console.error('Fetch error:', res.status, errorText);
    throw new Error('Failed to fetch projects');
  }

  const data = await res.json();

  const filteredData = data.data.map((project: Project) => ({
    ...project,
    translations: project.translations.filter((t) => t.locale === lang),
  }));

  return {
    data: filteredData,
    meta: {
      filter_count: data.meta?.filter_count || filteredData.length,
      total_count: data.meta?.total_count || 0,
      page,
      limit,
    },
  };
}
