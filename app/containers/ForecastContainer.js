import React, {Component, PropTypes} from 'react';
import Forecast from '../components/Forecast';
import weather from '../utils/weather';

class ForecastContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      weather: []
    }
  }

  componentWillMount() {
    const test = weather.getFiveDayForecast(this.props.params.city).then(function(weatherList) {
      this.setState({
        weather: weatherList
      });
    }.bind(this));
  }

  componentDidMount() {
    console.log('DID MOUNT');
  }

  componentWillReceiveProps(nextProps) {

  }

  // shouldComponentUpdate(nextProps, nextState) {

  // }

  componentWillUpdate(nextProps, nextState) {

  }

  componentDidUpdate(prevProps, prevState) {

  }

  componentWillUnmount() {

  }

  render() {
    /**
     * @todo Tie this to the Forecast component
     */
    // <div>
    //   <Forecast 
    //     city={this.state.city}
    //     weather={this.state.weather}
    //     date={this.state.weather}
    //   />
    // </div> );
    return ( <div>YO DAWG!</div> );
  }
}


export default ForecastContainer;