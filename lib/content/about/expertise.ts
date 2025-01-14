import { Code, Database, Cog } from 'lucide-react';

export const expertiseContent = {
  title: 'Areas of Expertise',
  categories: [
    {
      title: 'Frontend Development',
      icon: Code,
      items: [
        'Modern React/Next.js Applications',
        'TypeScript & JavaScript',
        'Responsive UI/UX Design',
        'State Management (Redux, Context)',
        'Performance Optimization'
      ]
    },
    {
      title: 'Backend Development',
      icon: Database,
      items: [
        'Node.js/Express Applications',
        'RESTful API Design',
        'GraphQL Implementation',
        'Database Architecture',
        'Microservices Design'
      ]
    },
    {
      title: 'DevOps & Architecture',
      icon: Cog,
      items: [
        'AWS Cloud Infrastructure',
        'CI/CD Pipeline Setup',
        'Docker Containerization',
        'System Architecture Design',
        'Performance Monitoring'
      ]
    }
  ]
} as const;