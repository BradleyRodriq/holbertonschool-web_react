import React from 'react';
import { render } from '@testing-library/react';
import NotificationItem from './NotificationItem';

describe('NotificationItem Component', () => {
  test('renders with blue color and data-notification-type="default" when type is "default"', () => {
    const { getByText } = render(<NotificationItem type="default" value="Test notification" />);
    const listItem = getByText('Test notification');

    // Check data attribute
    expect(listItem).toHaveAttribute('data-notification-type', 'default');

    // Check color style
    expect(listItem).toHaveStyle('color: blue');
  });

  test('renders with red color and data-notification-type="urgent" when type is "urgent"', () => {
    const { getByText } = render(<NotificationItem type="urgent" value="Urgent notification" />);
    const listItem = getByText('Urgent notification');

    // Check data attribute
    expect(listItem).toHaveAttribute('data-notification-type', 'urgent');

    // Check color style
    expect(listItem).toHaveStyle('color: red');
  });
});
