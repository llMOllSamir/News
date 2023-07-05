import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Weather() {
  // weather data response
  let [data,setData]=useState({})
 // search input width custom
  let [searchWidth,setwidth]=useState("w-25")
   // week days
   const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // get day 
  const currentDay = new Date();

// weather data 
let weatherGo = async (city= "cairo")=>{
await axios(`https://api.weatherapi.com/v1/forecast.json?key=9868a68e1d8c4ba7947200831231802&q=${city}`).then(res=>{
  setData(res.data)
  }).catch(err=>{weatherGo("cairo")})
}

// edit time
let editText = (term,index = 0)=>{
 let  newText = term.split(" ")
  return newText[index]
}
// edit date
let dateText=(term)=>{
  let data = term.split("-")
  return `${data[1]} / ${data[2]} `
}
//control search bar
let searchInputAnimation=()=>{
  if(searchWidth=="w-25"){
    setwidth("w-100")
  }else{
    setwidth("w-25")
  }
}

  useEffect(()=>{
    weatherGo()
  },[])

  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-lg-6  ms-auto position-relative ">
            <div id="weather" className='px-3 py-2' >
              <div className="row">
                  <div className="col-4 ">
                    <div className="row h-100 align-items-center px-3">
                    <div className="weather-info px-0">
                    <div className="current-weather"><img src={data?.forecast?.forecastday[0].day?.condition?.icon}  className='w-100' alt="" /></div>
                    <span>{data?.forecast?.forecastday[0].day?.condition.text}</span></div>
                    <h4 className='primary'>{data?.current?.temp_c}  ْC </h4>
                    </div>
                  </div>
                  <div className="col-4 d-flex justify-content-center align-items-center">
                    <label htmlFor="search" className='d-flex flex-column align-items-center justify-content-center  '><i className='fa fa-solid fa-search fs-3 mb-2 primary cursor-pointer' ></i>
                    <input type="search" id='search' onChange={function(e){
                      weatherGo(e.target.value)
                    }}  onBlur={(info)=>{searchInputAnimation();info.target.value="";info.target.style.backgroundColor="transparent"}}
                     onFocus={(info)=>{searchInputAnimation();info.target.style.backgroundColor="white"}}
                      className={`form-control ${searchWidth}`} />
                    </label>
                  </div>
                  <div className="col-4">
                    <div className="row text-end">
                      <div className="time primary">{data&&data.location &&editText(data.location.localtime,1)}</div>
                      <div className="date primary">{weekday[currentDay.getDay()]} <span className='ms-2'>{data&&data.location && dateText(editText(data.location.localtime,0))}</span></div>
                      <div className="contry weather-info">{data?.location?.name.split(" ").splice(0,1).join("")} , {data?.location?.country}</div>
                    </div>
                  </div>
              </div>
            </div>
           </div>
        </div>
    </div>
    </>
  )
}
