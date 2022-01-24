import userEvent from '@testing-library/user-event';
import { render, screen } from '../../test-utils';
import App from '../App';

jest.mock('../services');

test('Login form submits correctly', async () => {
  render(<App />);
  const emailInput = screen.getByPlaceholderText('Email');
  const passwordInput = screen.getByPlaceholderText('Password');
  const loginButton = screen.getByText('Login');
  userEvent.type(emailInput, 'test@test.com');
  userEvent.type(passwordInput, 'password');
  expect(emailInput.value).toBe('test@test.com');
  expect(passwordInput.value).toBe('password');
  userEvent.click(loginButton);
  expect(await screen.findByText('OUR RECENT DOCTORS')).toBeInTheDocument();
});
