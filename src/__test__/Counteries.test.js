
import { Counteries } from './utils.jsx'
import { render } from '@testing-library/react';
import React from "react";


let fakeData= { name:"name" , flag:"flag", lat:"lat" ,population:'12222'} 
 
test('should render counteries', () => {
  render(<Counteries props={fakeData}/>);

})