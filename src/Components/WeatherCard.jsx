import React, { useState } from 'react'

const WeatherCard = ({ weather,temp }) => {

    const [isCelsius, setisCelsius] = useState(true)

    const handleClick = () => setisCelsius(!isCelsius)

    return (
        <article className='card'>
           <header className='card_header'>
            <h1 className='card_tittle'>Weather Apps</h1>
            <h2 className='card_subtitle'>{weather?.name}, {weather?.sys.country}</h2>
           </header>
            <section className='card_icon-container'>
                <img className='card_icon' src={weather && `http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
                <h3 className='card_temp'> 
                {
                  isCelsius ?
                   `${temp?.celsius} °C` 
                   : `${temp?.farenheit} °F`}</h3>

            </section>

            <section className='card_info'>
                <h3 className='card_description'>"{weather?.weather[0].description}"</h3>
                <ul className='card_list'>
                    <li className='card_item'><span className='card_span'>Wind Speed</span> {weather?.wind.speed} m/s</li>
                    <li className='card_item'><span className='card_span'>Clouds</span> {weather?.clouds.all} %</li>
                    <li className='card_item'><span className='card_span'>Pressure</span> {weather?.main.pressure} hPa</li>
                </ul>
            </section>
            <footer className='card_footer'>
                <button onClick={handleClick} className='card_btn'>Degrees °F/°C</button>
            </footer>
        </article>
    )
}

export default WeatherCard