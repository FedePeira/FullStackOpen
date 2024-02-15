import React, { useState, useEffect } from 'react';
import WeatherService from '../services/WeatherService';
import '../css/Countries.css'

const Countries = ({ array, showCountry }) => {
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [weatherData, setWeatherData] = useState(null);

  const firstCondition = array.length >  4;
  const secondCondition = array.length ===  1;

  const message = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom:  20
  }

  const handleShowButtonClick = (country) => {
    console.log("Handle Countries");
    setSelectedCountry(country);
    const weather = 
    WeatherService
      .get(country.capital)
    setWeatherData(weather);
  };

  if (selectedCountry) {
    return showCountry(selectedCountry, weatherData);
  }

  if(firstCondition){
    return(
      <div style={message}>
        <p>Too many matches, specify another filter</p>
      </div>
    )
  }

  if(secondCondition){
    const country = array[0]
    return showCountry(country)
  }
  return(
    <ul className="countries-list">
      {array.map((country, index) => (
        <li key={index} className="country-item">
          <span className="country-name">{country.name.common}</span>
          <button className="country-button" onClick={() => handleShowButtonClick(country)}>
            Show
          </button>
        </li>
      ))}
    </ul>
  )
}

export default Countries