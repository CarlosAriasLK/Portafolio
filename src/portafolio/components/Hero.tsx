'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components';
import { ArrowDown, Moon, Sun } from 'lucide-react';
import Link from 'next/link';
import { Dictionary } from '@/dictionaries/types';
import {LanguageSwitcher} from '@/components/LanguageSwitcher';


export default function Hero({ dict, lang }: { dict: Dictionary; lang: 'es' | 'en' }) {
    const [isDark, setIsDark] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const updateScroll = () => {
            setIsScrolled(window.scrollY > 300);
        };

        window.addEventListener('scroll', updateScroll);
        return () => window.removeEventListener('scroll', updateScroll);
    }, []);


    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToNextSection = () => {
        const nextSection = document.getElementById('about');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToProjects = () => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const toggleTheme = () => {
        setIsDark(!isDark)
        document.documentElement.classList.toggle("dark")
    }

    return (
        <>
            <motion.div
                className='flex flex-row fixed top-6 right-3 items-center justify-between z-50 w-[270px]'
            >

                <motion.div
                    className='flex items-center'
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.01 }}
                >
                    <button className='cursor-pointer' onClick={toggleTheme}>
                        {isDark ? <Sun /> : <Moon />}
                    </button>
                </motion.div>

                <LanguageSwitcher/>

                <motion.div
                    className='bg-linear-to-r from-cyan-600 via-cyan-400 to-cyan-500 hover:from-cyan-500 hover:via-cyan-500 hover:to-cyan-400 cursor-pointer text-white font-semibold p-2 rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-300'
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.01 }}
                >
                    <Link href='/cv/CV-CarlosArias.pdf' target='_blank'>
                        <button className='cursor-pointer'>
                            {dict.hero.downloadCV}
                        </button>
                    </Link>
                </motion.div>

            </motion.div>

            <motion.div
                className="fixed top-6 left-6 z-50 pointer-events-auto"
                initial={{ opacity: 0, y: -20 }}
                animate={{
                    opacity: isScrolled ? 1 : 0,
                    y: 5,
                    x: isScrolled ? 0 : -20,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 100,
                    damping: 15,
                    mass: 0.8,
                }}
            >
                <motion.button
                    onClick={scrollToTop}
                    className="group relative"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <motion.div
                        className="absolute inset-0 -inset-x-4 -inset-y-2 rounded-xl"
                        style={{
                            backdropFilter: 'blur(12px)',
                            WebkitBackdropFilter: 'blur(12px)',
                        }}
                    />

                    <span className="relative text-xl md:text-2xl font-bold bg-clip-text cursor-pointer">
                        Carlos Arias
                    </span>

                </motion.button>
            </motion.div>


            <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-linear-to-b from-background to-secondary/20">
                <div className="container px-4 mx-auto text-center z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h1
                            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-primary to-primary/60"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            Carlos Arias
                        </motion.h1>

                        <motion.p
                            className="text-xl md:text-2xl text-muted-foreground mb-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            {dict.hero.role}
                        </motion.p>

                        <motion.p
                            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            {dict.hero.description}

                        </motion.p>

                        <motion.div
                            className="flex gap-4 justify-center flex-wrap"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                        >
                            <Button onClick={scrollToProjects} size="lg" className="text-lg cursor-pointer shadow-xl">
                                {dict.hero.viewProjects}
                            </Button>
                            <Button onClick={scrollToContact} size="lg" variant="outline" className="text-lg cursor-pointer shadow-lg">
                                {dict.hero.contact}
                            </Button>
                        </motion.div>
                    </motion.div>

                    <motion.button
                        onClick={scrollToNextSection}
                        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        <ArrowDown className="w-6 h-6 text-muted-foreground" />
                    </motion.button>
                </div>

                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(50)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-primary/20 rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, -30, 0],
                                opacity: [0.2, 0.5, 0.2],
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                            }}
                        />
                    ))}
                </div>
            </section>
        </>
    );
}
