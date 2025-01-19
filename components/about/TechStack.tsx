'use client';

import { motion } from 'framer-motion';
import { skillsContent } from '@/lib/content/skills/index';

export function TechStack() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-neutral-800 rounded-[2rem] my-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6">{skillsContent.title}</h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-12 max-w-2xl">
            {skillsContent.description}
          </p>

          <div className="space-y-16">
            {skillsContent.categories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.2 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Icon className="w-6 h-6" />
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                        className="bg-neutral-50 dark:bg-neutral-700 rounded-xl p-4"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <div className="h-2 bg-neutral-200 dark:bg-neutral-600 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                            className="h-full bg-neutral-900 dark:bg-neutral-100"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
