
import "./App.css";
import './fontawesome-free-5.15.1-web/css/fontawesome.css'
import "./fontawesome-free-5.15.1-web/css/brands.css"
import "./fontawesome-free-5.15.1-web/css/solid.css"
// import {useEffect} from 'react'
import{usePosition} from './usePosition'


import axios from 'axios'

import {useState,useEffect} from 'react'

function App() {
  // const {position,error} = usePosition();
  // console.log('position : '+usePosition())
  // useEffect(() => {
  //   // console
  // }, []);


  const [position,setPosition]=useState({})
  const [error,setError]=useState(null)
  const [weather,setWeather]=useState({})

  const onChange=({coords})=>{
      // console.log('coords.latitude : '+coords.latitude)
      // console.log('coords.longitude : '+coords.longitude)
      setPosition({
        latitude: coords.latitude,
        longitude: coords.longitude,
      })
      // console.log(position.latitude!=coords.latitude)
        
          return axios.get(`data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=3e3f2591f46e6acfd136e70b83e46680&units=metric`)
          .then(function(rep){
            setWeather(rep.data.main)
            // console.log("rep ",rep.data.weather)
          }).catch(function (error) {
           // handle error
           console.log(error);
         })
        
   
  }
  const onError=(error)=>{
      console.log(error)
      setError(error.message)
  }

  useEffect(()=>{
      const geo=navigator.geolocation
      // console.log(Date(1610635190 * 1000).getFullYear())
      var a = new Date(1610635190 * 1000);
      console.log(a.getFullYear())
      if(!geo){
          setError('geolocation is not supported')
          return;
      }
     let pos= geo.getCurrentPosition(onChange,onError)
 
     
     return pos;
  })


  return (
    <div className="App">
      <div className="bg-img">

      </div>
      <div className="cart">
        <div className="main">
          <div className="location">
            <div className="location-name">
              Buch<span>arest,RO</span>
              <div>{
                  
                  // a.getMinutes
              
              }</div>
            </div>
            <div className="location-info">
              <i class="fas fa-map-marker-alt"></i>
              <span>12:33</span>
            </div>
          </div>
        </div>
      <div className="forecast">
       
        <div className="today">
          <div>
          <div className="temperature">
          {weather.temp}°
              <span className="day">Monday</span>
          </div>
          </div>
       
            <i class="fas fa-cloud-showers-heavy"></i>
        </div>
       
    
        <div className="forecast-day">
        <span className="day">Mon</span>
            <div className="temperature">
              82°
            </div>
            <i class="fas fa-cloud-showers-heavy"></i>
        </div>

        <div className="forecast-day">
        <span className="day">Mon</span>
            <div className="temperature">
              82°
            </div>
            <i class="fas fa-cloud-showers-heavy"></i>
        </div>

        <div className="forecast-day">
        <span className="day">Mon</span>
            <div className="temperature">
              82°
            </div>
            <i class="fas fa-cloud-showers-heavy"></i>
        </div>

        <div className="forecast-day">
        <span className="day">Mon</span>
            <div className="temperature">
              82°
            </div>
            <i class="fas fa-cloud-showers-heavy"></i>
        </div>

        <div className="forecast-day">
        <span className="day">Mon</span>
            <div className="temperature">
              82°
            </div>
            <i class="fas fa-cloud-showers-heavy"></i>
        </div>

        <div className="forecast-day">
        <span className="day">Mon</span>
            <div className="temperature">
              82°
            </div>
            <i class="fas fa-cloud-showers-heavy"></i>
        </div>
      
  
      </div>
      </div>
    </div>
  );
}

export default App;
