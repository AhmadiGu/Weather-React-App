import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { detailsLocation } from '../redux/details';

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

  const detalisData = useSelector((state) => state.details.detailsList);

  // let {coordlat} = detalis
  // const value = Object.values(detalis)
  // let weather = value[1]
  // let description = weather.map((country) => country.description)
  // const weatherDec = Object.entries(weather)
  // console.log('count0', weather)
  // console.log('count0', detalisData.clouds.all)
  // Object.values(value[1])
  // console.log('weat', description )
  // console.log('weat', description )
  // console.log('dec', coordlat )
  const me = detalisData.clouds;
  console.log('count0', me);
 // me.forEach((me) => console.log('c', me.all))
  return (
    <>
      {

      }

    </>

  );
};

export default Details;
