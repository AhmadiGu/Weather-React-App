import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import logo from '../images/logo3.png';
import { getLocation, changeContinent } from '../redux/location';

const Navbar = () => {
  const dispatch = useDispatch();
  const inputEl = useRef(null);
  useEffect(() => {
    inputEl.current.focus();
  }, []);
  let location = useSelector((state) => state.locations.locationList);

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

  const handleContinentChange = (continent) => {
    dispatch(changeContinent(continent));
  };

  return (
    <>
      <div className="navbar">
        <div className="nav-container">
          <img src={logo} alt="logo" />
          <div>
            <h1>World Weather App</h1>
            <p>
              Countries
              {' '}
              {location.length}
            </p>
          </div>
        </div>
        <div className="formSearch">
          <form>
            <input
              type="text"
              className="search"
              placeholder="search"
              value={searchBarValue}
              onChange={searchFilterFun}
              ref={inputEl}
            />
            <button type="submit" aria-label="search" className="searchIcon" onClick={searchRes}><FaSearch /></button>
          </form>

          <div className="categoryButton">

            <button type="button" className="ca-buttton" onClick={() => handleContinentChange('All')}>All</button>
            <button type="button" className="ca-buttton" onClick={() => handleContinentChange('Africa')}>Africa</button>
            <button type="button" className="ca-buttton" onClick={() => handleContinentChange('Asia')}>Asia</button>
            <button type="button" className="ca-buttton" onClick={() => handleContinentChange('Europe')}>Europe</button>
            <button type="button" className="ca-buttton" onClick={() => handleContinentChange('Oceania')}>Ocenia</button>

            <button type="button" className="ca-buttton" onClick={() => handleContinentChange('Americas')}>Americas</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
