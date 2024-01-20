import React, { useState } from 'react'

const Weather = () => {
  const[InpDatas,SetInpDatas]=useState()
  const[FetchedDatas,SetFetchedDatas]=useState()
  const InputEvent=(event)=>{
SetInpDatas(event.target.value)
  }

  const FetchApi=async ()=>{
    const api=`https://api.openweathermap.org/data/2.5/weather?q=${InpDatas}&units=metric&appid=77ca1dac2594a6c51399b803db6bf4bf`
    const response=await fetch(api)
    const result=await response.json()
    console.log(result)
    SetFetchedDatas(result)
  }

  return (
    <div>
      <input type="text" name="" id="" onChange={InputEvent} />
      <button onClick={FetchApi}>search</button>
  {FetchedDatas && FetchedDatas.main &&(
 <>
    <p>City:{FetchedDatas.name}</p>
    <p>Temperature:{FetchedDatas.main.temp} degree Celsius</p>
 </>
  )}
    </div>
  )
}

export default Weather;
