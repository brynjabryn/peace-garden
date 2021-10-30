import { render, screen } from '@testing-library/react';
import Layout from './Layout';

test('renders learn react link', () => {
  render(<Layout />);
  const linkElement = screen.getByElement(header);
  expect(linkElement).toBeInTheDocument();
});
