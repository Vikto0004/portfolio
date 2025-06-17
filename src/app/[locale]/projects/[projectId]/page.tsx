import { projectsData } from '@/components/data/projectsData';
import Project from '@/components/Project/Project';

export default function ProjectPage() {
  return (
    <>
      <Project project={projectsData[0]} />
    </>
  );
}
