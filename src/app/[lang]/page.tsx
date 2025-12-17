import { About, Contact, Hero, Projects, Skills } from '@/portafolio';
import { ScrollToTop } from '@/components';
import { getDictionary } from '@/dictionaries';

export default async function Home({ params, }: { params: { lang: 'es' | 'en' }; }) {

    const paramsValues = await params;
    const dict = await getDictionary(paramsValues.lang);

    return (
        <main className="min-h-screen">
            <Hero dict={dict} lang={paramsValues.lang} />
            <About dict={dict} />
            <Projects dict={dict} />
            <Skills dict={dict} />
            <Contact dict={dict} />
            <ScrollToTop />
        </main>
    );
}
