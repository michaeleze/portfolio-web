import { Code, Database, Cog, Layout, Brain, Cloud, Terminal, Users } from 'lucide-react';

export const skillsContent = {
  title: 'Technical Skills',
  description: 'A comprehensive overview of my technical expertise and proficiency levels.',
  categories: [
    {
      title: 'Frontend Development',
      icon: Code,
      skills: [
        { name: 'React/Next.js', level: 95, icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
        { name: 'TypeScript', level: 95, icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg' },
        { name: 'Vue.js/Nuxt', level: 90, icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg' },
        { name: 'React Native', level: 85, icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
        { name: 'Angular', level: 85, icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg' },
        { name: 'HTML5/CSS3', level: 95, icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg' },
      ],
    },
    {
      title: 'Backend & Databases',
      icon: Database,
      skills: [
        { name: 'Node.js/Express', level: 90, icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg' },
        { name: 'PostgreSQL', level: 85, icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg' },
        { name: 'MongoDB', level: 85, icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg' },
        { name: 'GraphQL', level: 90, icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain.svg' },
        { name: 'Redis', level: 80, icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg' },
        { name: 'Java', level: 80, icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg' },
      ],
    },
    {
      title: 'DevOps & Cloud',
      icon: Cloud,
      skills: [
        { name: 'AWS', level: 90, icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg' },
        { name: 'Docker', level: 85, icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg' },
        { name: 'Kubernetes', level: 80, icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg' },
        { name: 'Azure', level: 85, icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg' },
        { name: 'GCP', level: 80, icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/googlecloud/googlecloud-original.svg' },
        { name: 'Terraform', level: 75, icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/terraform/terraform-original.svg' },
      ],
    },
    {
      title: 'Testing & Quality',
      icon: Terminal,
      skills: [
        { name: 'Jest', level: 90, icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/jest/jest-plain.svg' },
        { name: 'React Testing Library', level: 90, icon: 'https://testing-library.com/img/octopus-128x128.png' },
        { name: 'End-to-End Testing', level: 85, icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cucumber/cucumber-plain.svg' },
        { name: 'TDD', level: 90, icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/jasmine/jasmine-plain.svg' },
        { name: 'SonarQube', level: 80, icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/sonarqube/sonarqube-original.svg' },
      ],
    },
    {
      title: 'UI/UX & Design',
      icon: Layout,
      skills: [
        { name: 'Figma', level: 85, icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg' },
        { name: 'Material UI', level: 90, icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg' },
        { name: 'Tailwind CSS', level: 95, icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg' },
        { name: 'Storybook', level: 85, icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/storybook/storybook-original.svg' },
        { name: 'Design Systems', level: 90, icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/xd/xd-plain.svg' },
      ],
    },
    {
      title: 'Leadership & Methods',
      icon: Users,
      skills: [
        { name: 'Technical Leadership', level: 95, icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg' },
        { name: 'Agile/Scrum', level: 90, icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/jira/jira-original.svg' },
        { name: 'System Architecture', level: 90, icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/confluence/confluence-original.svg' },
        { name: 'Mentorship', level: 95, icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/slack/slack-original.svg' },
      ],
    },
    {
      title: 'AI & Advanced Tech',
      icon: Brain,
      skills: [
        { name: 'Artificial Intelligence', level: 85, icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg' },
        { name: 'Authentication/OAuth', level: 90, icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/auth0/auth0-original.svg' },
        { name: 'SEO Optimization', level: 85, icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/google/google-original.svg' },
        { name: 'API Design', level: 90, icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/swagger/swagger-original.svg' },
      ],
    },
  ],
} as const;
