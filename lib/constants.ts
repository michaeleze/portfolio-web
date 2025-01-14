import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
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
    href: 'https://twitter.com/michaeleze',
    icon: Twitter,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/michaeleze',
    icon: Linkedin,
  },
  {
    name: 'Email',
    href: 'mailto:michael.eze@example.com',
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