import React, {Component} from 'react';
import Home from './Home';
import {backgroundColor} from '../styles';
import GetWeatherContainer from '../containers/GetWeatherContainer';


/**
 * @todo Add GetWeatherContainer to the main bar eventually.
 */
class Main extends Component {
  render() {
    return (
      <div className='main-container no-gutter' style={backgroundColor}>
        <header>
          <h1>React Weather</h1>
        </header>
        <div className='container no-gutter'>
          {this.props.children}
        </div>
      </div>
    );
  }
}
/* 
<div className='col-sm-3 pull-right'>
  <GetWeatherContainer/>
</div>
*/

export default Main;