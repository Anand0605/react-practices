import React, { useEffect, useState } from 'react';

const Weather = () => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;

                    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=c4a8678ac29dcfd90256842cba38ed0c`)
                        .then((response) => response.json())
                        .then((data) => setWeather(data));
                },
                (error) => {
                    console.error("Error getting geolocation: ", error);
                }
            );
        }
    }, []);

    return (
        <div>
            {weather ? (
                <div>
                    <h2>Current Weather</h2>
                    <p>Temperature: {weather.main.temp}</p>
                    <p>Condition: {weather.weather[0].description}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Weather;
