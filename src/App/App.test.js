import { render, screen } from '@testing-library/react';
import App from './App';

test("renders 'Mise en place' h1", () => {
  render(<App />);
  const linkElement = screen.getByText(/Mise en place/i);
  expect(linkElement).toBeInTheDocument();
});
