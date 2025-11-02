import { About, Contact, Hero, Projects, Skills } from '@/portafolio';
import { ScrollToTop } from '@/components';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <ScrollToTop />
    </main>
  );
}
