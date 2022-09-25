import React, { useState } from 'react'

const WeatherCard = ({weather,temperature}) => {

  const [isCelsius, setisCelsius] = useState(true)

  const changeUnit =() => setisCelsius(!isCelsius)

console.log(weather)
  return (
    <article className='Card'>
      <h1>Weather App</h1>
      <h2>{`${weather?.name} ${weather?.sys.country}` } </h2>

      <section>
      <img  src={weather ? `http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png` : ""}  alt=''/>
      </section>

      <section>
        <h3>"{weather?.weather[0].description}"</h3>
        <ul>
          <li><span>Wind Speed </span> {weather?.wind.speed} m/s</li>
          <li><span>Clouds </span>{weather?.clouds.all} %</li>
          <li><span>Pressure </span>{weather?.main.pressure} hPa</li>  
        </ul>
      </section>

      <h3 className='card__temperature' >{isCelsius ? `${temperature?.celsius} C°` : `${temperature.fahrenheit} F°`}</h3>
      <button className='card__button' onClick={changeUnit}>{isCelsius ? "Change to F°" : "Change to C°" }</button>


      


    </article>
  )
}

export default WeatherCard