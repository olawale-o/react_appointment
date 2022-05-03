import userEvent from '@testing-library/user-event';
import { render, screen } from '../../test-utils';
import App from '../App';

jest.mock('../services');

test('Registration form submits correctly', async () => {
  render(<App />);
  expect(screen.getByText(/Don't have an account?/i)).toBeInTheDocument();
  userEvent.click(screen.getByText(/Don't have an account?/i));
  userEvent.type(screen.getByPlaceholderText('Email'), 'test@test.com');
  userEvent.type(screen.getByPlaceholderText('Full name'), 'test');
  userEvent.type(screen.getByPlaceholderText('Password'), 'password');
  userEvent.type(screen.getByPlaceholderText('Confirm Password'), 'password');
  userEvent.click(screen.getByText('Create'));
  expect(await screen.findByText('OUR RECENT DOCTORS')).toBeInTheDocument();
});
