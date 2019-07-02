import React from 'react';
import Form from './components/Form';
import Titles from './components/Titles';
import Weather from './components/Weather';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const Api_Key = "8d2de98e089f1c28e1a22fc19a24ef04";
class App extends React.Component {
  
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`);
    const response = await api_call.json();
    console.log(response);

    if(city && country){
      this.setState({
        temperature: response.main.temp,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        description: response.weather[0].description,
        error: ""
      })
    } else {
      this.setState({
        error: "Please enter the values"
      })
    }
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-xs-5 title-container">
                <Titles />
              </div>
              <div className="col-lg-7 col-xs-7 form-container">
                <Form loadWeather={this.getWeather}/>
                <Weather 
                  temperature={this.state.temperature}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  error={this.state.error}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
