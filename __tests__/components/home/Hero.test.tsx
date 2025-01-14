import { render, screen } from '@testing-library/react';
import Hero from '@/components/home/Hero';
import { homeContent } from '@/lib/content';

describe('Hero', () => {
  it('renders hero content correctly', () => {
    render(<Hero />);
    
    expect(screen.getByText(homeContent.hero.title)).toBeInTheDocument();
    expect(screen.getByText(homeContent.hero.subtitle)).toBeInTheDocument();
  });

  it('applies correct styling classes', () => {
    render(<Hero />);
    
    const title = screen.getByText(homeContent.hero.title);
    expect(title).toHaveClass('text-6xl', 'md:text-8xl', 'font-bold');
  });
});