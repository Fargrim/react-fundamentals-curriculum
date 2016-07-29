import React, {Component} from 'react';
import Home from './Home';
import {backgroundColor} from '../styles';
import GetWeatherContainer from '../containers/GetWeatherContainer';

class Main extends Component {
  render() {
    return (
      <div className='main-container' style={backgroundColor}>MAIN.JS COMPONENT
        <div className='col-sm-3 pull-right'>
          <GetWeatherContainer/>
        </div>
        <div className='container'>          
          <Home />
        </div>
      </div>
    );
  }
}

export default Main;