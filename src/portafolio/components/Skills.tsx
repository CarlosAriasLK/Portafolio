'use client';

import { motion } from 'framer-motion';
import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiRedux, SiNodedotjs, SiExpress, SiPostgresql, SiMysql, SiMongodb, SiSequelize, SiFlutter, SiDart, SiGit, SiDocker, SiJavascript } from 'react-icons/si';
import { TbBrandFramerMotion } from 'react-icons/tb';
import { FaJava } from 'react-icons/fa';
import { Dictionary } from '@/dictionaries/types';

const technologies = {
  // Frameworks
  frameworks: [
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
    { name: 'Express.js', icon: SiExpress, color: '#000000' },
    { name: 'Redux', icon: SiRedux, color: '#764ABC' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Framer Motion', icon: TbBrandFramerMotion, color: '#FF0055' },
  ],

  // Languages
  languages: [
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'Java', icon: FaJava, color: '#007396' },
    { name: 'Dart', icon: SiDart, color: '#0175C2' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  ],
  
  // Databases, ORMs y DevOps
  utilities: [
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'Sequelize', icon: SiSequelize, color: '#52B0E7' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  ]
};


export default function Skills({ dict }: { dict: Dictionary }) {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">

      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-foreground via-primary to-foreground">
            {dict.skills.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {dict.skills.description}
          </p>
        </motion.div>

        <div className="relative w-full overflow-hidden">
          <div className="absolute top-0 left-0 bottom-0 w-32 bg-linear-to-r from-background via-background/20 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 bottom-0 w-32 bg-linear-to-l from-background via-background/20 to-transparent z-10 pointer-events-none" />

          <div className="flex flex-col gap-8 py-8">
            <motion.div
              className="flex gap-6"
              animate={{
                x: [0, -96 * technologies.frameworks.length],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...technologies.frameworks, ...technologies.frameworks, ...technologies.frameworks].map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <motion.div
                    key={`col1-${index}`}
                    className="group relative shrink-0"
                    whileHover={{ scale: 1.15, zIndex: 10 }}
                  >
                    <motion.div
                      className="relative p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                      style={{
                        boxShadow: `0 4px 20px ${tech.color}20`,
                      }}
                      whileHover={{
                        borderColor: tech.color,
                        boxShadow: `0 8px 30px ${tech.color}40`,
                      }}
                    >
                      <Icon
                        className="w-12 h-12 md:w-14 md:h-14"
                        style={{ color: tech.color }}
                      />

                      {/* <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        className="absolute top-full mt-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-card border border-border px-4 py-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <span className="text-sm font-semibold">{tech.name}</span>
                        <div
                          className="absolute bottom-full left-1/2 -translate-x-1/2 w-0 h-0 border-8 border-transparent"
                          style={{ borderBottomColor: 'hsl(var(--border))' }}
                        />
                      </motion.div> */}
                      
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div
              className="flex gap-6"
              animate={{
                x: [-96 * technologies.languages.length, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...technologies.languages, ...technologies.languages, ...technologies.languages].map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <motion.div
                    key={`col2-${index}`}
                    className="group relative shrink-0"
                    whileHover={{ scale: 1.15, zIndex: 10 }}
                  >
                    <motion.div
                      className="relative p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                      style={{
                        boxShadow: `0 4px 20px ${tech.color}20`,
                      }}
                      whileHover={{
                        borderColor: tech.color,
                        boxShadow: `0 8px 30px ${tech.color}40`,
                      }}
                    >
                      <Icon
                        className="w-12 h-12 md:w-14 md:h-14"
                        style={{ color: tech.color }}
                      />

                      {/* <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        className="absolute top-full mt-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-card border border-border px-4 py-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <span className="text-sm font-semibold">{tech.name}</span>
                        <div
                          className="absolute bottom-full left-1/2 -translate-x-1/2 w-0 h-0 border-8 border-transparent"
                          style={{ borderBottomColor: 'hsl(var(--border))' }}
                        />
                      </motion.div> */}
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div
              className="flex gap-6"
              animate={{
                x: [0, -96 * technologies.utilities.length],
              }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...technologies.utilities, ...technologies.utilities, ...technologies.utilities].map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <motion.div
                    key={`col3-${index}`}
                    className="group relative shrink-0"
                    whileHover={{ scale: 1.15, zIndex: 10 }}
                  >
                    <motion.div
                      className="relative p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                      style={{
                        boxShadow: `0 4px 20px ${tech.color}20`,
                      }}
                      whileHover={{
                        borderColor: tech.color,
                        boxShadow: `0 8px 30px ${tech.color}40`,
                      }}
                    >
                      <Icon
                        className="w-12 h-12 md:w-14 md:h-14"
                        style={{ color: tech.color }}
                      />

                      {/* <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        className="absolute top-full mt-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-card border border-border px-4 py-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <span className="text-sm font-semibold">{tech.name}</span>
                        <div
                          className="absolute bottom-full left-1/2 -translate-x-1/2 w-0 h-0 border-8 border-transparent"
                          style={{ borderBottomColor: 'hsl(var(--border))' }}
                        />
                      </motion.div> */}
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
