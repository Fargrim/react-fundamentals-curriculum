import React, {Component} from 'react';
import GetWeather from '../components/GetWeather';

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
    // Button click route
    console.log('Handle Submit City', this.state.city);
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

export default GetWeatherContainer;