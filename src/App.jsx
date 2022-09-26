import axios from 'axios'
import { useEffect, useState, loader } from 'react'
import './App.css'
import Loader from './components/Loader'
import WeatherCard from './components/WeatherCard'
import clouds from "../src/assets/Nubes.mp4"

function App() {


  const [coords, setcoords] = useState()
  const [weather, setWheather] = useState()
  const [temperature, setTemperature] = useState()
  
//Con este encapsulamos el dato de la longitud y latitud para alimentar la api(linea 30)
  useEffect (() =>{
    const success = pos =>{
      const obj = {
        lat : pos.coords.latitude,
        lon : pos.coords.longitude
      }
      setcoords (obj);
    }
    navigator.geolocation.getCurrentPosition(success)
    
  }, [])

//Aqui estamos recibiendo dinamicamente la info de API con el state COORDS 
  useEffect (() => {
    if(coords){
    const APIKEY = "e7062b3ac6a0a823703afba231178fa3"
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIKEY}`
    axios.get(URL)
  .then(res => {
    const celsius = (res.data.main.temp-273.15).toFixed(0)
    const fahrenheit = (celsius * 9 / 5 + 32).toFixed(0) 
    setTemperature({celsius,fahrenheit}) 
    setWheather(res.data)
  })
  .catch(err => console.log(err))
    }
  },[coords])

  
// Acá vamos a hacer la conversión de la informacion de Kelvin a Celsius y a F
  
  return (
    
    <div className="App">
      <video className='clouds_video' src = {clouds} autoPlay muted loop></video>
      {
    weather ?
      < WeatherCard weather={weather} temperature={temperature}/>
    : <Loader />
    }
    </div>
  )

      
  
}

export default App
