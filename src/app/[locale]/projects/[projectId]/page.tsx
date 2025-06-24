import Project from '@/components/Project/Project';

type PropsType = {
  params: Promise<{
    locale: string;
    projectId: string;
  }>;
};

export default async function ProjectPage({ params }: PropsType) {
  const { locale, projectId } = await params;

  const DIRECTUS_URL = process.env.NEXT_PUBLIC_DIRECTUS_URL;

  const res = await fetch(`${DIRECTUS_URL}/${locale}/api/projects/${projectId}`);
  const project = await res.json();

  return (
    <>
      <Project project={project.data} />
    </>
  );
}
