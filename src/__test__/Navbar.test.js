import { render } from '@testing-library/react';
import React from 'react';
import { Navbar } from './utils';

const fakeData = { length: '12222' };

test('should render Navbar', () => {
  render(<Navbar props={fakeData} />);
});
