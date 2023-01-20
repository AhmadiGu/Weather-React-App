import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import logo from '../images/logo3.png';
import { getLocation } from '../redux/location';

const Navbar = () => {
  const dispatch = useDispatch();
  const inputEl = useRef(null);
  useEffect(() => {
    inputEl.current.focus();
  }, []);
  let location = useSelector((state) => state.locations.locationList).filter((location) => location.region === 'Asia');

  const [searchBarValue, setSearchBarValue] = useState('');

  const searchFilterFun = (event) => {
    const itemData = location.filter((item) => {
      const itemData = item.name.toUpperCase();
      const itemText = event.target.value.toUpperCase();
      return itemData.indexOf(itemText) > -1;
    });

    location = dispatch(getLocation(itemData));
    setSearchBarValue(event.target.value);
    return location;
  };
  const searchRes = (event) => {
    event.preventDefault();
  };

  return (
    <div className="navbar">
      <div className="nav-container">
        <img src={logo} alt="logo" />
        <div>
          <h1>Asia Weather App</h1>
          <p>
            Countries
            {' '}
            &nbsp &nbsp
            {location.length}
          </p>
        </div>
      </div>
      <form>
        <input
          type="text"
          className="search"
          placeholder="search"
          value={searchBarValue}
          onChange={searchFilterFun}
          ref={inputEl}
        />
        <button type="submit" className="searchIcon" onClick={searchRes}><FaSearch /></button>
      </form>

    </div>
  );
};

export default Navbar;
