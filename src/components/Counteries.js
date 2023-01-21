import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { TfiBackRight } from 'react-icons/tfi';
import { useNavigate } from 'react-router-dom';
import { countriesSelector } from '../redux/location';

const Counteries = () => {
  // const [continent, setContinent] = useState('All');

  const allCountries = useSelector(countriesSelector);

  const navigate = useNavigate();

  const detailsHandeler = (name) => {
    const itemData = allCountries.filter((item) => item.name === name);
    navigate('/detials', { state: itemData });
  };
  return (
    <>
      {
          allCountries.map((country) => (

            <div key={uuidv4()} className="card">
              <div className="card-info">
                <div className="image"><img src={country.flag} alt="flag" /></div>
                <div className="content">
                  <p>{country.name}</p>
                  <p>{country.population}</p>
                </div>

              </div>
              <div className="buttton">
                <button type="button" onClick={() => detailsHandeler(country.name)}>

                  <span><TfiBackRight /></span>
                  {' '}
                  Detials

                </button>
              </div>
            </div>

          ))
      }
    </>
  );
};

export default Counteries;
