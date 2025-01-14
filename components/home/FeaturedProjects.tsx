'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { homeContent } from '@/lib/content';

export default function FeaturedProjects() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="py-20 bg-white dark:bg-neutral-800"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6">{homeContent.featured.title}</h2>
        <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-12">
          {homeContent.featured.description}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {homeContent.featured.projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="rounded-2xl overflow-hidden bg-neutral-50 dark:bg-neutral-700"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full bg-neutral-200 dark:bg-neutral-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}