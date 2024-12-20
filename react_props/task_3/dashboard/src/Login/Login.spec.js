import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';

describe('Login Component', () => {
  // Test: Verify the presence of 2 labels, 2 inputs, and 1 button
  test('renders 2 labels, 2 input fields, and 1 button', () => {
    render(<Login />);
    
    // Check for labels
    const labels = screen.getAllByLabelText(/email|password/i); // Case-insensitive match
    expect(labels).toHaveLength(2);

    // Check for input fields
    const inputs = screen.getAllByRole('textbox');
    expect(inputs).toHaveLength(2);

    // Check for button
    const button = screen.getByRole('button', { name: /ok/i }); // Case-insensitive match
    expect(button).toBeInTheDocument();
  });

  // Test: Verify input focus when related label is clicked
  test('focuses input field when label is clicked', () => {
    render(<Login />);

    // Get the label and associated input
    const emailLabel = screen.getByLabelText(/email/i); // Find the email label
    const emailInput = screen.getByRole('textbox', { name: /email/i }); // Find the email input

    // Simulate clicking the label
    fireEvent.click(emailLabel);

    // Assert that the input is focused
    expect(document.activeElement).toBe(emailInput);
  });
});
