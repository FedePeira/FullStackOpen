import { useState, useEffect } from 'react'
import countriesServices from './services/CountriesService.jsx'
import Countries from './components/Countries.jsx'
import Filter from './components/Filter.jsx'

// Componente App
const App = () => {
  const [countries, setCountries] = useState([])
  const [filterNameCountry, setNewFilterNameCountry] = useState('')

  useEffect(() => {
    countriesServices
      .getAll()
      .then(initialCountries => {
        console.log('Countries available')
        setCountries(initialCountries)
      })
      .catch(error => {
        alert(`Error` + error)
      })
  }, [])

  const filterCountries = filterNameCountry === '' ? countries : countries.filter(country => country.name.common.includes(filterNameCountry));

  const showCountry = (country, weatherData) => {
    console.log("Show Country and Weather")
    return(
      <div>
        <h1>{country.name.common}</h1>
        <p>{country.capital}</p>
        <p>{country.area}</p>
        <h3>Languages:</h3>
        <ul>
          {Object.values(country.languages).map((language, index) => 
            <li key={index}>
              {language}
            </li>
            )}
        </ul>
        <img src={country.coatOfArms.png} alt="flag"></img>
        {weatherData && (
        <div>
          <h2>Weather in {country.capital}</h2>
          <p>Temperature: {weatherData.main?.temp}°C</p>
          <p>Humidity: {weatherData.main?.humidity}%</p>
          <img src={`http://openweathermap.org/img/w/${weatherData.weather?.[0]?.icon}.png`} alt="Weather Icon" />
        </div>
      )}
      </div>
    )
  }

  const handleFilterChange = (event) => {
    setNewFilterNameCountry(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
        value={filterNameCountry} 
        handleChange={handleFilterChange}/>
      <Countries 
        array={filterCountries}
        showCountry={showCountry}/>
    </div>
  )
}

export default App
