import userEvent from '@testing-library/user-event';
import { render, screen } from '../../test-utils';
import App from '../App';

jest.mock('../services');

describe('Doctor List', () => {
  test('should list all doctors', async () => {
    render(<App />);
    // LOG USER IN
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const loginButton = screen.getByText('Login');
    userEvent.type(emailInput, 'test@test.com');
    userEvent.type(passwordInput, 'password');
    expect(emailInput.value).toBe('test@test.com');
    expect(passwordInput.value).toBe('password');
    userEvent.click(loginButton);

    // WAIT FOR THE HOMEPAGE

    expect(await screen.findByText('OUR RECENT DOCTORS')).toBeInTheDocument();
    expect(screen.getByText('Pediatrics')).toBeInTheDocument();
    expect(screen.getByText('Dr. John Doe')).toBeInTheDocument();
    expect(screen.getByText(/See details/i)).toBeInTheDocument();

    // NAVIGATE TO DETAILS PAGE FOR SELECTED DOCTOR

    userEvent.click(screen.getByText(/See details/i));
    expect(await screen.findByText('per hour')).toBeInTheDocument();
    expect(await screen.findByText('New York')).toBeInTheDocument();
    expect(screen.getByTestId('arrow-back')).toBeInTheDocument();

    // NAVIGATE BACK TO HOMEPAGE

    userEvent.click(screen.getByTestId('arrow-back'));
    expect(await screen.findByText('OUR RECENT DOCTORS')).toBeInTheDocument();
  });
});
