import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { GiFastBackwardButton } from 'react-icons/gi';
import { detailsLocation } from '../redux/details';
import thunderImg from '../images/thunderstor.jpg';
import clearImg from '../images/clear.webp';
import cloudsImg from '../images/cloud.webp';
import drizzleImg from '../images/dizzel.jpg';
import rainImg from '../images/rain.jpg';
import snowImg from '../images/snow.webp';

const Details = () => {
  const location = useLocation();
  const data = location.state;
  const latArr = data.map((country) => country.latlng[0]);
  const lonArr = data.map((country) => country.latlng[1]);
  const lat = latArr[0];
  const lon = lonArr[0];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsLocation({ lat, lon }));
  }, [dispatch]);

  const weather = useSelector((state) => state.details.detailsList);

  const main = weather[0]?.main;
  const description = weather[0]?.description;

  const background = () => {
    const desc = main;
    if (desc === 'Clear') {
      return { backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${clearImg})` };
    }
    if (desc === 'Thunder') {
      return { backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${thunderImg})` };
    }
    if (desc === 'Snow') {
      return { backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${snowImg})` };
    }
    if (desc === 'Rain') {
      return { backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${rainImg})` };
    }
    if (desc === 'Drizzle') {
      return { backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${drizzleImg})` };
    }

    return { backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${cloudsImg})` };
  };

  return (
    <>
      {
        data.map((country) => (

          <div key={uuidv4()} className="details-container" style={background()}>
            <div className="top">

              <Link to="/">
                <button type="button" className="icon">
                  <span>
                    <GiFastBackwardButton />
                    {' '}
                  </span>
                </button>
              </Link>

              <div className="corner">
                <div className="image"><img src={country.flag} alt="flag" /></div>
                <div className="corner-content">
                  <p className="title">
                    {' '}
                    time Zone:
                    {country.timezones}
                  </p>
                  <p className="title">
                    {' '}
                    country Region:
                    {country.region}
                  </p>
                </div>

              </div>
            </div>

            <div className="details-info">
              <p className="title">Weather</p>
              {' '}
              <p className="content">{ description}</p>
              <p className="title">country Name</p>
              {' '}
              <p className="content">{country.name}</p>
              <p className="title"> country Population</p>
              {' '}
              <p className="content">{country.population}</p>
              <p className="title"> country Capital</p>
              {' '}
              <p className="content">{country.capital}</p>

              <p className="title"> country Subregion</p>
              {' '}
              <p className="content">{country.subregion}</p>

            </div>

          </div>

        ))
      }

    </>

  );
};

export default Details;
