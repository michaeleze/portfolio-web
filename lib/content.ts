import { Code, Palette, LineChart } from 'lucide-react';

export const siteConfig = {
  name: 'Michael Eze',
  title: 'Lead Software Engineer & UX Expert',
  description: 'Crafting exceptional digital experiences through innovative solutions and user-centric design',
  email: 'michael.eze@example.com',
  phone: '(555) 555-5555',
  location: {
    street: '123 Tech Avenue',
    city: 'New York',
    state: 'NY',
    zip: '10001'
  }
} as const;

export const experienceContent = {
  title: 'Professional Experience',
  roles: [
    {
      position: 'Lead Software Engineer',
      company: 'Knauf Digital',
      period: '2022 - Present',
      description: 'Leading the development of enterprise-scale web applications and digital transformation initiatives.'
    },
    {
      position: 'Senior Software Engineer',
      company: 'Audi AG',
      period: '2020 - 2022',
      description: 'Architected and developed innovative automotive software solutions using cutting-edge technologies.'
    },
    {
      position: 'Software Engineer',
      company: 'Various Companies',
      period: '2016 - 2020',
      description: 'Developed and maintained multiple web applications and services across different industries.'
    }
  ]
} as const;

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

export const homeContent = {
  hero: {
    title: '{Hello}',
    subtitle: 'I am a highly technical <Software_Engineer /> with 9+ years experience. I care about crafting beautiful and exceptional digital experiences through innovative .',
    caption: 'Software Engineer & UX Expert'
  },
  featured: {
    title: 'Featured Projects',
    description: 'A selection of my most impactful work',
    projects: [
      {
        title: 'Knauf Digital Platform',
        description: 'Enterprise-scale web application for digital transformation',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
        tags: ['Next.js', 'TypeScript', 'AWS']
      },
      {
        title: 'Audi Vehicle Configuration',
        description: 'Interactive vehicle configuration system',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop',
        tags: ['React', 'Node.js', 'GraphQL']
      },
      {
        title: 'E-commerce Platform',
        description: 'Modern e-commerce solution with advanced features',
        image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2340&auto=format&fit=crop',
        tags: ['Next.js', 'Stripe', 'PostgreSQL']
      }
    ]
  }
} as const;
