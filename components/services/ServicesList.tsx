'use client';

import { motion } from 'framer-motion';
import { servicesContent } from '@/lib/content';
import { ServiceCard } from './ServiceCard';

export function ServicesList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {servicesContent.services.map((service, index) => (
        <ServiceCard
          key={service.title}
          title={service.title}
          description={service.description}
          icon={service.icon as any}
          index={index}
        />
      ))}
    </div>
  );
}