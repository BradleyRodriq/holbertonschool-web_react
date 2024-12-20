import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import holbertonLogo from './assets/holberton-logo.jpg';

describe('Header Component', () => {
  // Test: Check whether the Holberton logo exists
  test('renders the Holberton logo', () => {
    render(<Header />);
    const logoElement = screen.getByAltText(/holberton logo/i); // Find the image by its alt text
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveAttribute('src', holbertonLogo); // Verify the correct image source
  });

  // Test: Check whether the h1 element contains the correct text
  test('renders the heading with correct text', () => {
    render(<Header />);
    const headingElement = screen.getByRole('heading', { level: 1 });
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveTextContent(/school dashboard/i); // Ensure text matches (case insensitive)
  });
});
