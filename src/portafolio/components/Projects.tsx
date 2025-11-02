'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components';
import { Github, ChevronLeft, ChevronRight } from 'lucide-react';

type Project = {
    title: string;
    description: string;
    tech: string[];
    icon: string;
    gradient: string;
    bgGradient: string;
    github: string;
    demo: string;
    stars: number;
    views: number;
    images: string[];
    repository: string;
};

// NOTA: Actualiza las rutas de imágenes según tus archivos reales dentro de /public/projects/<proyecto>/
const projects: Project[] = [
    {
        title: 'Journal App',
        description: 'Aplicación de notas y diario personal con autenticación y almacenamiento en la nube.',
        tech: ['React', 'Vite', 'Material UI', 'Firebase', 'Redux Toolkit'],
        icon: '✅',
        gradient: 'from-green-500 via-teal-500 to-cyan-500',
        bgGradient: 'from-green-500/10 to-cyan-500/10',
        github: '#',
        demo: '#',
        stars: 89,
        views: 1820,
        images: [
            '/projects/journal/3.png',
            '/projects/journal/2.png',
            '/projects/journal/1.png',
        ],
        repository: 'https://github.com/CarlosAriasLK/JournalApp.git',
    },
    {
        title: 'Econova App',
        description: 'Plataforma para monitoreo ambiental y gestión de recursos naturales.',
        tech: ['Java', 'Spring Boot', 'Vue', 'PostgresQL', 'Postman'],
        icon: '🛒',
        gradient: 'from-blue-500 via-purple-500 to-pink-500',
        bgGradient: 'from-blue-500/10 to-purple-500/10',
        github: '#',
        demo: '#',
        stars: 128,
        views: 2450,
        images: [
            '/projects/econova/1.png',
            '/projects/econova/2.png',
            '/projects/econova/3.png',
        ],
        repository: 'https://github.com/CarlosAriasLK/BusinessIntelligence.git',
    },
    {
        title: 'Calendar App',
        description: 'Aplicación pensada para la colaboración y productividad en equipos de trabajo.',
        tech: ['React', 'Nodejs', 'Redux Toolkit', 'Shadcn', 'Framer Motion', 'Tailwind CSS', 'MongoDB'],
        icon: '📱',
        gradient: 'from-cyan-500 via-blue-500 to-indigo-500',
        bgGradient: 'from-cyan-500/10 to-indigo-500/10',
        github: '#',
        demo: '#',
        stars: 97,
        views: 1650,
        images: [
            '/projects/calendar/2.png',
            '/projects/calendar/1.png',
        ],
        repository: 'https://github.com/CarlosAriasLK/CalendarApp.git',
    },
    {
        title: 'Ecommerce App',
        description: 'Ecommerce móvil con catálogo de productos, carrito de compras y pagos simulados.',
        tech: ['Flutter', 'Dart', 'Riverpod', 'Sqflite'],
        icon: '🤖',
        gradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
        bgGradient: 'from-violet-500/10 to-fuchsia-500/10',
        github: '#',
        demo: '#',
        stars: 243,
        views: 4100,
        images: [
            '/projects/ecommerceapp/8.png',
            '/projects/ecommerceapp/1.png',
            '/projects/ecommerceapp/2.png',
            '/projects/ecommerceapp/3.png',
            '/projects/ecommerceapp/5.png',
            '/projects/ecommerceapp/6.png',
            '/projects/ecommerceapp/7.png',
        ],
        repository: 'https://github.com/CarlosAriasLK/ECommercePlatzi.git',
    },
    {
        title: 'Cinemapedia App',
        description: 'Aplicación móvil para explorar películas y series, con detalles y valoraciones.',
        tech: ['Flutter', 'Dart', 'Riverpod', 'Sqflite'],
        icon: '🛒',
        gradient: 'from-blue-500 via-purple-500 to-pink-500',
        bgGradient: 'from-blue-500/10 to-purple-500/10',
        github: '#',
        demo: '#',
        stars: 128,
        views: 2450,
        images: [
            '/projects/cinemapediaapp/1.png',
            '/projects/cinemapediaapp/2.png',
            '/projects/cinemapediaapp/3.png',
            '/projects/cinemapediaapp/4.png',
            '/projects/cinemapediaapp/5.png',
        ],
        repository: 'https://github.com/CarlosAriasLK/CinemapediaApp.git',
    },
    
    

];

// Carrusel de imágenes sencillo por tarjeta
function ImageSlider({ images, alt }: { images: string[]; alt: string }) {
    const [index, setIndex] = useState(0);

    const hasImages = images && images.length > 0;
    const safeImages = hasImages ? images : ['/projects/placeholder.jpg'];

    const next = () => setIndex((i) => (i + 1) % safeImages.length);
    const prev = () => setIndex((i) => (i - 1 + safeImages.length) % safeImages.length);

    return (
    <div className="relative w-full overflow-hidden bg-black/5 aspect-video md:aspect-4/3">
            {safeImages.map((src, i) => (
                <motion.div
                    key={src + i}
                    className="absolute inset-0"
                    initial={false}
                    animate={{ opacity: i === index ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <Image
                        src={src}
                        alt={`${alt} ${i + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-contain"
                        onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                        }}
                        priority={i === 0}
                    />
                </motion.div>
            ))}

            {/* Controles */}
            {safeImages.length > 1 && (
                <div className="absolute inset-0 flex items-center justify-between px-2">
                    <button
                        aria-label="Anterior"
                        onClick={(e) => { e.stopPropagation(); prev(); }}
                        className="p-1 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors cursor-pointer"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        aria-label="Siguiente"
                        onClick={(e) => { e.stopPropagation(); next(); }}
                        className="p-1 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors cursor-pointer"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            )}

            {/* Dots */}
            {safeImages.length > 1 && (
                <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
                    {safeImages.map((_, i) => (
                        <button
                            key={i}
                            onClick={(e) => { e.stopPropagation(); setIndex(i); }}
                            className={`h-1.5 rounded-full transition-all ${i === index ? 'w-6 bg-white' : 'w-2 bg-white/60'}`}
                            aria-label={`Imagen ${i + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default function Projects() {
    
    return (
        <section id="projects" className="py-20 relative overflow-hidden">
            
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
            </div>

            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0, rotate: 180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.6, type: "spring" }}
                        viewport={{ once: true }}
                        className="inline-block mb-4"
                    >
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-foreground via-primary to-foreground">
                        Proyectos
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Una selección de mis trabajos recientes y proyectos destacados.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <motion.div
                                whileHover={{ y: -8, scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Card className="h-full flex flex-col overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 group relative">
                                    {/* Resplandor al hover */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                        <div className={`absolute inset-0 bg-linear-to-br`} />
                                    </div>

                                    {/* Header con slider de imágenes */}
                                    <div className={`relative overflow-hidden`}>
                                        <ImageSlider images={project.images} alt={project.title} />
                                    </div>

                                    <CardHeader className="relative">
                                        <CardTitle className="group-hover:text-primary transition-colors duration-300">
                                            {project.title}
                                        </CardTitle>
                                        <CardDescription>{project.description}</CardDescription>
                                    </CardHeader>

                                    <CardContent className="grow relative">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((tech, idx) => (
                                                <motion.span
                                                    key={tech}
                                                    initial={{ opacity: 0, scale: 0 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: index * 0.1 + idx * 0.05 }}
                                                    viewport={{ once: true }}
                                                    className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full transition-colors duration-200 cursor-default border border-transparent hover:border-primary/30"
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </CardContent>

                                    <CardFooter className="relative">
                                        <Button
                                            asChild
                                            variant="outline"
                                            size="sm"
                                            className="group-hover:border-primary/50 transition-colors duration-300 cursor-pointer w-full"
                                        >
                                            <Link href={project.repository} target="_blank" rel="noopener noreferrer" className='flex w-full flex-row items-center justify-center'>
                                                <Github className="w-4 h-4 mr-2" />
                                                Código
                                            </Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
