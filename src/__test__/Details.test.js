
import { Details } from './utils.jsx'
import { render } from '@testing-library/react';
import React from "react";


let fakeData= { name:"name" , flag:"flag", region:"region" ,timezones:'12222',
 description:'description', population:'population', capital:'capital', subregion:'subregion'} 
 
test('should render counteries details', () => {
  render(<Details props={fakeData}/>);

})