import React, { useState } from 'react'

const WeatherCard = ({weather,temperature}) => {

  const [isCelsius, setisCelsius] = useState(true)

  const changeUnit =() => setisCelsius(!isCelsius)

console.log(weather)
  return (
    <article className='card'>
      <h1 className='card__title' >Weather App</h1>
      <h2 className='card_subtitle'>{`${weather?.name} ${weather?.sys.country}` } </h2>

      <section>
      <img className='card__image' src={weather ? `http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png` : ""}  alt=''/>
      </section>

      <section>
        <h3 className='card__cloudTipe'>{weather?.weather[0].description}</h3>
        <ul className='card__atributes'>
          <li className='card__wind'><span>Wind Speed </span> {weather?.wind.speed} m/s</li>
          <li className='card__clouds'><span>Clouds </span>{weather?.clouds.all} %</li>
          <li className='card__pressure'><span>Pressure </span>{weather?.main.pressure} hPa</li>  
        </ul>
      </section>

      <h3 className='card__temperature' >{isCelsius ? `${temperature?.celsius} C°` : `${temperature.fahrenheit} F°`}</h3>
      <button className='card__button' onClick={changeUnit}>{isCelsius ? "Change to F°" : "Change to C°" }</button>


      


    </article>
  )
}

export default WeatherCard