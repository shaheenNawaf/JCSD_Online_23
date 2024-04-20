// Header.test.jsx

import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import Header from '../Sidebar/Header'; // Adjust the import path as needed
import { expect } from 'chai'; // Import expect from Chai

describe('Header Component', () => {
  it('renders without crashing', () => {
    render(
      <Router> {/* Wrap the Header component with BrowserRouter */}
        <Header />
      </Router>
    );
  });

  it('renders search input correctly', () => {
    const { getByPlaceholderText } = render(
      <Router> {/* Wrap the Header component with BrowserRouter */}
        <Header />
      </Router>
    );
    const searchInput = getByPlaceholderText('Search...');
    expect(searchInput).to.exist; // Use Chai's exist assertion
  });

  // Add more test cases as needed
});
