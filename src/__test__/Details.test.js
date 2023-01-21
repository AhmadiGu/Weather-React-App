import { render } from '@testing-library/react';
import React from 'react';
import { Details } from './utils';

const fakeData = {
  name: 'name',
  flag: 'flag',
  region: 'region',
  timezones: '12222',
  description: 'description',
  population: 'population',
  capital: 'capital',
  subregion: 'subregion',
};

test('should render counteries details', () => {
  render(<Details props={fakeData} />);
});
