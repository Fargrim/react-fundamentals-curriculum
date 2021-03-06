import React, {Component} from 'react';
import Forecast from '../components/Forecast';
import weather from '../utils/weather';
import {backgroundImg} from '../styles';

class ForecastContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forecast: []
    }
  }

  requestForecast(city) {
    weather.getFiveDayForecast(city).then(function(weatherList) {
      console.log(weatherList);
      this.setState({
        forecast: weatherList
      });
    }.bind(this));
  }

  componentWillMount() {
    this.requestForecast(this.props.params.city);
    
  }

  // componentDidMount() {
    
  // }

  // componentWillReceiveProps(nextProps) {

  // }

  // shouldComponentUpdate(nextProps, nextState) {

  // }

  // componentWillUpdate(nextProps, nextState) {

  // }

  // componentDidUpdate(prevProps, prevState) {

  // }

  // componentWillUnmount() {

  // }

  render() {
    /**
     * @todo Tie this to the Forecast component
     */
    return ( <div style={backgroundImg}>
      <Forecast 
        forecast={this.state.forecast}
      />
    </div> );
  }
}


export default ForecastContainer;