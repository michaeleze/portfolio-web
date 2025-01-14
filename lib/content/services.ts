import { Code, Palette, LineChart } from 'lucide-react';

export const servicesContent = {
  hero: {
    title: "Let's Build Something Amazing",
    subtitle: 'Comprehensive solutions for your digital needs'
  },
  services: [
    {
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with the latest technologies',
      icon: 'Code'
    },
    {
      title: 'UX Design',
      description: 'User-centered design solutions that enhance engagement and satisfaction',
      icon: 'Palette'
    },
    {
      title: 'Technical Consulting',
      description: 'Expert guidance on architecture, technology selection, and best practices',
      icon: 'LineChart'
    }
  ]
} as const;