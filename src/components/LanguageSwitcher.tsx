'use client';

import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

export const LanguageSwitcher = () => {
    const pathname = usePathname();
    const router = useRouter();

    const currentLang = pathname.split('/')[1] as 'es' | 'en';

    const switchLanguage = (newLang: 'es' | 'en') => {
        if (newLang === currentLang) return;

        const segments = pathname.split('/');
        segments[1] = newLang;
        router.push(segments.join('/'));
    };

    return (
        <motion.div 
            className="z-50 flex gap-2 bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-1 shadow-lg"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.01 }}
        >
            <motion.button
                onClick={() => switchLanguage('es')}
                className={`px-3 py-1.5 rounded-2xl text-sm font-medium transition-colors ${currentLang === 'es'
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
            >
                ES
            </motion.button>
            <motion.button
                onClick={() => switchLanguage('en')}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${currentLang === 'en'
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                whileTap={{ scale: 0.95 }}
            >
                EN
            </motion.button>
        </motion.div>
    );
}