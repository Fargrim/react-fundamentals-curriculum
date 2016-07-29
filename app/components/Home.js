import React, {Component} from 'react';
import {backgroundImg} from '../styles';
import GetWeatherContainer from '../containers/GetWeatherContainer';

class Home extends Component {
  render() {
    return (
      <div className='col-lg-12 text-center' style={backgroundImg}>
        <h1>Enter a City and State</h1>
        <GetWeatherContainer onSubmit></GetWeatherContainer>
      </div>
    );
  }
}

export default Home;

/*
<form onSubmit=''>
  <input placeholder='Chicago, IL'>
  
  </input>
  <button onClick=''>Get Weather</button>
</form>
*/