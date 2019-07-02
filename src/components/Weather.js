import React from 'react';

const Weather = (props) => {
    const country = props.country;
    const city = props.city;
    const temperature = props.temperature;
    const humidity = props.humidity;
    const description = props.description;
    const error = props.error;

    return (
        <div className="weather-info"> 
            {
                country && city && <p className="weather__key">Location: 
                    <span className="weather__value">{city}, {country}</span>
                </p>
            }
            {
                temperature && <p className="weather__key">Temperature: 
                    <span className="weather__value">{temperature}</span>
                </p>
            }
            {
                humidity && <p className="weather__key">Humidity: 
                    <span className="weather__value">{humidity}</span>
                </p>
            }
            {
                description && <p className="weather__key">Desciption: 
                    <span className="weather__value">{description}</span>
                </p>
            }
            {
                error && <p className="weather__key">
                    <span className="weather__value">{error}</span>
                </p>
            }
        </div>
    );
}

export default Weather;