import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications Component', () => {
  // Test: Check the existence of the notifications title
  test('renders the notifications title', () => {
    render(<Notifications />);
    const title = screen.getByText(/here is the list of notifications/i); // Case-insensitive match
    expect(title).toBeInTheDocument();
  });

  // Test: Check the existence of the button element
  test('renders a close button', () => {
    render(<Notifications />);
    const button = screen.getByRole('button', { name: /close/i }); // Case-insensitive match for aria-label
    expect(button).toBeInTheDocument();
  });

  // Test: Verify that there are 3 li elements rendered as notifications
  test('renders 3 list items', () => {
    render(<Notifications />);
    const listItems = screen.getAllByRole('listitem'); // Matches all <li> elements
    expect(listItems).toHaveLength(3);
  });

  // Test: Check whether clicking the close button logs the correct message to the console
  test('logs message to console on close button click', () => {
    const consoleSpy = jest.spyOn(console, 'log'); // Spy on console.log
    render(<Notifications />);

    const button = screen.getByRole('button', { name: /close/i }); // Find the close button
    fireEvent.click(button); // Simulate click event

    expect(consoleSpy).toHaveBeenCalledWith('Close button has been clicked'); // Check log message
    consoleSpy.mockRestore(); // Restore original console.log
  });
});
