'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components';

const skills = [
  { name: 'NextJs', level: 90, icon: '▲', color: 'from-gray-700 to-gray-900' },
  { name: 'React', level: 90, icon: '⚛️', color: 'from-cyan-500 to-blue-500' },
  { name: 'Flutter', level: 80, icon: '🐦', color: 'from-teal-400 to-cyan-500' },
  { name: 'Java', level: 70, icon: '☕', color: 'from-orange-600 to-red-600' },
  { name: 'NodeJs', level: 85, icon: '🟢', color: 'from-green-600 to-green-700' },
  { name: 'Docker', level: 60, icon: '🐳', color: 'from-blue-500 to-blue-600' },
];

const categories = [
  { name: 'Frontend', skills: ['NextJs', 'React', 'TypeScript', 'Tailwind CSS', 'Shadcn', 'Rive', 'Framer Motion', 'React Router', 'Redux'] },
  { name: 'Backend', skills: ['NodeJs', 'ExpressJs', 'Java', 'PostgreSQL', 'Mysql', 'MongoDB', 'Sequelize', 'Mongoose'] },
  { name: 'Mobile', skills: ['Flutter', 'Dart'] },
  { name: 'DevOps', skills: ['Git', 'Docker'] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">

      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-100 left-200 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-linear-to-r from-foreground via-primary to-foreground">
            Habilidades
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnologías y herramientas con las que trabajo regularmente.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* Vista de barras con iconos */}
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="p-4 hover:shadow-xl transition-all duration-300 group border-2 hover:border-primary/50">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <motion.span
                        className="text-3xl"
                        transition={{ duration: 0.5 }}
                      >
                        {skill.icon}
                      </motion.span>
                      <span className="font-semibold text-lg">{skill.name}</span>
                    </div>
                    <motion.span
                      className="text-sm font-bold text-primary"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 + 0.3 }}
                      viewport={{ once: true }}
                    >
                      {skill.level}%
                    </motion.span>
                  </div>

                  {/* Barra de progreso con gradiente */}
                  <div className="relative h-3 bg-secondary/50 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-linear-to-r ${skill.color} relative overflow-hidden`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.05, ease: "easeOut" }}
                      viewport={{ once: true }}
                    >
                      {/* Brillo animado */}
                      <motion.div
                        className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      />
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Categorías de habilidades */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-6 mt-12"
          >
            {categories.map((category, index) => (

              <motion.div
                key={category.name}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-6 text-center border-2 hover:border-primary/50 transition-all duration-300 bg-linear-to-br from-background to-secondary/20 h-full">
                  <h3 className="text-xl font-bold mb-4 text-primary">{category.name}</h3>
                  <div className="space-y-2">
                    {category.skills.map((skillName, idx) => (
                      <motion.div
                        key={skillName}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + idx * 0.05 }}
                        viewport={{ once: true }}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {skillName}
                      </motion.div>
                    ))}
                  </div>
                </Card>

              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
