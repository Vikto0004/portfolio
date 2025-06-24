import Project from '@/components/Project/Project';

type PropsType = {
  params: Promise<{
    locale: string;
    projectId: string;
  }>;
};

export default async function ProjectPage({ params }: PropsType) {
  const { locale, projectId } = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC}/${locale}/api/projects/${projectId}`);
  const project = await res.json();

  return (
    <>
      <Project project={project.data} />
    </>
  );
}
