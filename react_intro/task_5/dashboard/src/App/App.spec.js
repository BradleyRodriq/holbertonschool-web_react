import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App/App';

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
  test('renders 2 input elements', () => {
    render(<App />);
    const inputs = screen.getAllByRole('textbox'); // Adjust role if needed
    expect(inputs.length).toBe(2);
  });

  test('renders 2 label elements with the text Email and Password', () => {
    render(<App />);
    const emailLabel = screen.getByLabelText(/email/i);
    const passwordLabel = screen.getByLabelText(/password/i);

    expect(emailLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
  });

  test('renders a button with the text OK', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /ok/i });
    expect(button).toBeInTheDocument();
  });

});
