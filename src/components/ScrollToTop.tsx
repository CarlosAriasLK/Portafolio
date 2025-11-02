'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0, y: 20 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 p-4 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                    aria-label="Volver arriba"
                >
                    {/* Efecto de onda en hover */}
                    <motion.div
                        className="absolute inset-0 rounded-full bg-primary"
                        initial={{ scale: 1, opacity: 0.5 }}
                        whileHover={{ scale: 1.5, opacity: 0 }}
                        transition={{ duration: 0.6 }}
                    />

                    <motion.div
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <ArrowUp className="w-6 h-6 relative z-10" />
                    </motion.div>

                    {/* Círculo decorativo giratorio */}
                    <motion.div
                        className="absolute inset-0 rounded-full border-2 border-primary-foreground/20"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
