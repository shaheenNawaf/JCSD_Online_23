// Login.test.jsx

import { render } from '@testing-library/react';
import Login from '../Login/Login'; // Adjust the import path as needed

describe('Login Component', () => {
  it('renders without crashing', () => {
    render(<Login />);
  });

  it('renders username input correctly', () => {
    const { getByLabelText } = render(<Login />);
    const usernameInput = getByLabelText('Username');
    expect(usernameInput).toBeTruthy();
  });

  // Add more test cases as needed
});
