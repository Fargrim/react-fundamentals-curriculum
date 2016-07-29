import React, {PropTypes} from 'react';

const GetWeather = ({onSubmitCity, onUpdateCity, city}) => {
  return (
    <div className='col-md-12'>
      <form onSubmit={onSubmitCity}>
        <div className='form-group'>
            <input
              className='form-control'
              placeholder='Chicago, IL'
              type='text'
              onChange={onUpdateCity}
              value={city}
            />
          </div>
        <div className='form-group col-md-4 col-sm-offset-4'>
          <button
            className='btn btn-block btn-success'
            type='submit'>
              Get Weather
          </button>
        </div>
      </form>
    </div>
  );
}

GetWeather.propTypes = {
  city: PropTypes.string.isRequired,
  onSubmitCity: PropTypes.func.isRequired,
  onUpdateCity: PropTypes.func.isRequired
};

export default GetWeather;