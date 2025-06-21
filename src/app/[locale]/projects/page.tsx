import Projects from '@/components/Projects/Projects';
import Test from '@/components/Test/Test';
import { getProjects } from '@/lib/get-projects';

export default async function ProjectsPage() {
  const projects = await getProjects();

  console.log(projects);

  return (
    <>
      <Test projects={projects} />
      {/* <Projects projects={projects} ProjectsPage={true} /> */}
    </>
  );
}
