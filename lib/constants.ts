import { Github, Twitter, Linkedin, Mail, } from 'lucide-react';

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/project', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
] as const;

export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    href: 'https://github.com/michaeleze',
    icon: Github,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/michaeleze_dev',
    icon: Twitter,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/michaeleze',
    icon: Linkedin,
  },
  {
    name: 'Email',
    href: 'mailto:michael.eze3@gmail.com',
    icon: Mail,
  },
] as const;

export const FOOTER_LINKS = [
  {
    title: 'Quick Links',
    links: [
      { href: '/about', label: 'About' },
      { href: '/services', label: 'Services' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { href: '/services#web-development', label: 'Web Development' },
      { href: '/services#ux-design', label: 'UX Design' },
      { href: '/services#consulting', label: 'Technical Consulting' },
    ],
  },
] as const;

export const CAROUSEL_CONTENT = [
  {
    src: "/assets/images/epi/epi.png",
    alt: "Api testing app",
    path: 'details/epi'
  },
  {
    src: "/assets/images/Knauf/Knauf1.png",
    alt: "Created digital products for Knauf Digital",
    path: 'details/Knauf'
  },
  {
    src: "/assets/images/audi/audi2.png",
    alt: "White Label e-commerce app with Adobe Experince manager",
    path: 'details/audi'
  },
  {
    src: "/assets/images/diconium/diconium.png",
    alt: "Diconium Digital Solution 2019",
    path: 'details/diconium'
  },
  {
    src: "/assets/images/vgg/vgg.png",
    alt: "Built apps for VGG startups",
    path: 'details/vgg'
  },
  {
    src: "/assets/images/nairabox/nairabox.png",
    alt: "Internship at Nairabox",
    path: '/nairabox'
  },
] as const
