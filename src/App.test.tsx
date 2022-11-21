import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('initial test template', () => {
  render(<App />);
  const linkElement = screen.getByText(/opening hours/i);
  expect(linkElement).toBeInTheDocument();
});
