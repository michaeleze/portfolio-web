import { Code, Database, Cog } from 'lucide-react';

export const skillsContent = {
  title: 'Technical Skills',
  description: 'A comprehensive overview of my technical expertise and proficiency levels.',
  categories: [
    {
      title: 'Frontend Development',
      icon: Code,
      skills: [
        { name: 'React/Next.js', level: 95, icon: '/icons/react.svg' },
        { name: 'TypeScript', level: 90, icon: '/icons/typescript.svg' },
        { name: 'Tailwind CSS', level: 90, icon: '/icons/tailwind.svg' },
        { name: 'Vue.js', level: 85, icon: '/icons/vue.svg' },
      ],
    },
    {
      title: 'Backend Development',
      icon: Database,
      skills: [
        { name: 'Node.js', level: 90, icon: '/icons/nodejs.svg' },
        { name: 'Python', level: 85, icon: '/icons/python.svg' },
        { name: 'GraphQL', level: 85, icon: '/icons/graphql.svg' },
        { name: 'PostgreSQL', level: 80, icon: '/icons/postgresql.svg' },
      ],
    },
    {
      title: 'DevOps & Tools',
      icon: Cog,
      skills: [
        { name: 'AWS', level: 85, icon: '/icons/aws.svg' },
        { name: 'Docker', level: 80, icon: '/icons/docker.svg' },
        { name: 'Git', level: 90, icon: '/icons/git.svg' },
        { name: 'CI/CD', level: 85, icon: '/icons/cicd.svg' },
      ],
    },
  ],
} as const;