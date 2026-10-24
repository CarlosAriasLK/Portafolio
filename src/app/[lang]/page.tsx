import { Portfolio } from '@/portafolio';
import { getDictionary } from '@/dictionaries';
import type { Locale } from '@/dictionaries/types';

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {

    const lang = (await params).lang as Locale;
    // Se cargan ambos idiomas para poder cambiar en el cliente sin recargar (ej. comando "lang" de la terminal)
    const [es, en] = await Promise.all([getDictionary('es'), getDictionary('en')]);

    return <Portfolio initialLang={lang} dicts={{ es, en }} />;
}
