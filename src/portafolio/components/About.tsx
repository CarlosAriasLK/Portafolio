'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components';
import { Code2, Palette, Rocket, Zap, Heart, Trophy } from 'lucide-react';
import { Dictionary } from '@/dictionaries/types';

const features = [
    {
        icon: Code2,
        title: 'Desarrollo Limpio',
        description: 'Código mantenible y escalable siguiendo las mejores prácticas de la industria.',
        gradient: 'from-blue-500/20 via-blue-500/10 to-transparent',
        iconColor: 'text-blue-500',
    },
    {
        icon: Palette,
        title: 'Diseño Moderno',
        description: 'Interfaces atractivas y funcionales con enfoque en la experiencia del usuario.',
        gradient: 'from-purple-500/20 via-purple-500/10 to-transparent',
        iconColor: 'text-purple-500',
    },
    {
        icon: Rocket,
        title: 'Rendimiento',
        description: 'Aplicaciones optimizadas para velocidad y eficiencia en todos los dispositivos.',
        gradient: 'from-orange-500/20 via-orange-500/10 to-transparent',
        iconColor: 'text-orange-500',
    },
    {
        icon: Zap,
        title: 'Innovación',
        description: 'Siempre explorando nuevas tecnologías y metodologías para mejorar la calidad.',
        gradient: 'from-yellow-500/20 via-yellow-500/10 to-transparent',
        iconColor: 'text-yellow-500',
    },
    {
        icon: Heart,
        title: 'Pasión',
        description: 'Amo lo que hago y se refleja en cada proyecto que desarrollo.',
        gradient: 'from-red-500/20 via-red-500/10 to-transparent',
        iconColor: 'text-red-500',
    },
    {
        icon: Trophy,
        title: 'Excelencia',
        description: 'Compromiso con la calidad y la entrega de resultados excepcionales.',
        gradient: 'from-green-500/20 via-green-500/10 to-transparent',
        iconColor: 'text-green-500',
    },
];

export default function About({ dict }: { dict: Dictionary }) {
    return (
        <section id="about" className="py-20 relative overflow-hidden">

            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5, type: "spring" }}
                        viewport={{ once: true }}
                        className="inline-block mb-4"
                    >
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-foreground via-primary to-foreground">
                        {dict.about.title}
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        {/* Desarrollador disciplinado que busca entornos donde su conocimiento, habilidades y eficiencia pueda ponerse a prueba.  */}
                        {dict.about.description}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8, transition: { duration: 0.1 } }}
                        >
                            <Card className={`h-full group relative overflow-hidden hover:border-primary/50 transition-all duration-300 shadow-lg`}>

                                {/* Gradiente de fondo */}
                                <div className={`absolute inset-0 bg-linear-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                                <CardHeader className="relative">
                                    <motion.div
                                        className={`w-14 h-14 bg-background rounded-xl flex items-center justify-center mb-4 shadow-lg border-2 border-primary/20 group-hover:border-primary/50 transition-colors duration-300`}
                                        whileHover={{ rotate: 360, scale: 1.1 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
                                    </motion.div>
                                    <CardTitle className="group-hover:text-primary transition-colors duration-300">
                                        {feature.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="relative">
                                    <CardDescription className="text-base">
                                        {feature.description}
                                    </CardDescription>
                                </CardContent>

                                {/* Brillo decorativo */}
                                <motion.div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{
                                        background: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.1), transparent 70%)',
                                    }}
                                />
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
