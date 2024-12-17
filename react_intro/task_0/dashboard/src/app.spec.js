import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders the h1 element with the text "School Dashboard"', () => {
    render(<App />);
    const headingElement = screen.getByRole('heading', { name: /school dashboard/i });
    expect(headingElement).toBeInTheDocument();
  });

  test('renders the correct text content in app-body and app-footer paragraphs', () => {
    render(<App />);
    const bodyParagraph = screen.getByText(/login to access the full dashboard/i);
    const footerParagraph = screen.getByText(/copyright 2024 - holberton school/i);
    expect(bodyParagraph).toBeInTheDocument();
    expect(footerParagraph).toBeInTheDocument();
  });

  test('renders an img element with the correct alt text', () => {
    render(<App />);
    const imgElement = screen.getByAltText(/holberton logo/i);
    expect(imgElement).toBeInTheDocument();
  });
});
