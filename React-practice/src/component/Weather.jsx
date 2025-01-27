import React from 'react'

const Weather = () => {

    let temp = 23;

    if(temp < 15){
        return(
            <h1>It's Cold Weather Outside</h1>
        )
    }else if(temp >= 15 && temp <= 25){
        return(
            <h1>It's nice Weather Outside</h1>
        )
    }else if(temp > 25){
        return(
            <h1>It's Hot Weather Outside</h1>
        )
    }

  return (
    <div>
        Weather
    </div>
  )
}

export default Weather