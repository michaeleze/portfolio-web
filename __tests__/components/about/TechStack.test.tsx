import { render, screen } from '@testing-library/react';
import { TechStack } from '@/components/about/TechStack';
import { skillsContent } from '@/lib/content';

describe('TechStack', () => {
  it('renders all skill categories', () => {
    render(<TechStack />);
    
    skillsContent.categories.forEach(category => {
      expect(screen.getByText(category.title)).toBeInTheDocument();
    });
  });

  it('renders all skills with correct levels', () => {
    render(<TechStack />);
    
    skillsContent.categories.forEach(category => {
      category.skills.forEach(skill => {
        expect(screen.getByText(skill.name)).toBeInTheDocument();
      });
    });
  });

  it('displays the correct title and description', () => {
    render(<TechStack />);
    
    expect(screen.getByText(skillsContent.title)).toBeInTheDocument();
    expect(screen.getByText(skillsContent.description)).toBeInTheDocument();
  });
});