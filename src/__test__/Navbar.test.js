
import { Navbar } from './utils.jsx'
import { render } from '@testing-library/react';
import React from "react";


let fakeData= { length:'12222'} 
 
test('should render Navbar', () => {
  render(<Navbar props={fakeData}/>);

})