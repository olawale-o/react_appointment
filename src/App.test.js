import userEvent from '@testing-library/user-event';
import { render, screen, store } from '../test-utils';
import App from './App';

describe('App without authourization and authentication', () => {
  test('it should render login page and navigate to register page', () => {
    render(<App />);
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/register');
    expect(screen.getByText(/Don't have an account?/i)).toBeInTheDocument();
    userEvent.click(screen.getByText(/Don't have an account?/i));
    expect(screen.getByPlaceholderText('Full name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Confirm Password')).toBeInTheDocument();
  });

  test('it should render register page and navigate to login page', () => {
    render(<App />);
    expect(screen.getByRole('link')).toHaveAttribute('href', '/login');
    expect(screen.getByText(/Already have an account/i)).toBeInTheDocument();
    userEvent.click(screen.getByText(/Already have an account?/i));
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
  });
});

describe('App with authourization and authentication', () => {
  test('it should render home page', () => {
    store.dispatch({ type: 'auth/success', payload: { user: { id: 1, name: 'test', email: 'test@test.com' } } });
    render(<App />);
  });
});
