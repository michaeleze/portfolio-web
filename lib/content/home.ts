export const homeContent = {
  hero: {
    title: 'Lead Software Engineer',
    subtitle: 'Crafting exceptional digital experiences through innovative solutions and user-centric design',
    cta: 'View Projects'
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