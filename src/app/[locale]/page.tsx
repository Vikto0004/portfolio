import Hero from '@/components/Hero/Hero';
import History from '@/components/History/Hisory';
import Projects from '@/components/Projects/Projects';
import Services from '@/components/Services/Services';
import Technology from '@/components/Technology/Technology';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Technology />
      <History />
      <Projects />
    </>
  );
}
