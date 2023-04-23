import React from 'react';
import { render, screen } from '@testing-library/react';
import App_ from './App';

test('renders learn react link', () => {
  render(<App_ />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
