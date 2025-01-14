import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '@/components/layout/Navbar';
import { NAV_LINKS } from '@/lib/constants';

describe('Navbar', () => {
  it('renders all navigation links', () => {
    render(<Navbar />);
    
    NAV_LINKS.forEach(link => {
      expect(screen.getByText(link.label)).toBeInTheDocument();
    });
  });

  it('opens mobile menu when menu button is clicked', () => {
    render(<Navbar />);
    
    const menuButton = screen.getByLabelText('Open menu');
    fireEvent.click(menuButton);
    
    const mobileMenu = screen.getByRole('navigation');
    expect(mobileMenu).toBeInTheDocument();
  });

  it('closes mobile menu when close button is clicked', () => {
    render(<Navbar />);
    
    // Open menu
    fireEvent.click(screen.getByLabelText('Open menu'));
    
    // Close menu
    fireEvent.click(screen.getByLabelText('Close menu'));
    
    // Check if menu is closed
    expect(screen.queryByRole('navigation')).not.toBeVisible();
  });
});