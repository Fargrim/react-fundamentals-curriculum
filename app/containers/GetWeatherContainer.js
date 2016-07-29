import React, {Component} from 'react';
import GetWeather from '../components/GetWeather';
import weather from '../utils/weather';

class GetWeatherContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      city: ''
    }
  }
  handleUpdateCity(e) {
    this.setState({
      city: e.target.value
    });
  }
  handleSubmitCity() {
    // weather.getCurrentWeather(this.state.city)
    //   .then(function(w) {
    //     console.log('GetWeatherContainer.js', w);
    //   });
    // console.log('GetWeatherContainer.js', this.context);
    this.context.router.push('/forecast/' + this.state.city.replace(/\s/g, ''));
  }
  render() {
    return (
      <div>
        <GetWeather
          onSubmitCity={(e) => this.handleSubmitCity(e)}
          onUpdateCity={(e) => this.handleUpdateCity(e)}
          city={this.state.city}
        />
      </div>
    );
  }
}

GetWeatherContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};

//Current Weather: http://api.openweathermap.org/data/2.5/weather?q=CITY-NAME&type=accurate&APPID=2d4b3a400ebeddbcaca052859099c19d 
//5 Day Forecast: http://api.openweathermap.org/data/2.5/forecast/daily?q=CITY-NAME&type=accurate&APPID=2d4b3a400ebeddbcaca052859099c19d&cnt=5

export default GetWeatherContainer;