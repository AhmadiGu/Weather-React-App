import React from 'react'
import logo from '../images/logo3.png'
const Navbar = () => {
    return ( 
        <div className='navbar'>
            <div className='nav-container'>
              <img src={logo} alt='logo'></img> 
             <div>
              <h1 >Asia Weather App</h1>
              <p>Countries</p>
              </div>
            </div>

            <input type='text' className='search' placeholder='search'></input>
             
        </div>
     );
}
 
export default Navbar;