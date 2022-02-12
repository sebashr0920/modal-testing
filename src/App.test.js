import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const button = screen.getByText(/open modal/i);
  fireEvent.click(button);
  const modal = screen.getByText(/this is a modal/i)
  expect(modal).toBeInTheDocument();
});
