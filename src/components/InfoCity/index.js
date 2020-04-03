import React from 'react';
import { FiArrowUp, FiArrowDown, FiX } from 'react-icons/fi';

import { Container } from './styles';

export default function InfoCity({ city, handleClose }) {
  return (
    <Container>
      <div>
        <button type="button" onClick={handleClose}>
          <FiX size={18} color="#000" />
        </button>
      </div>
      <strong>
        {city?.location.city},{city?.location.region} - {city?.location.country}
      </strong>
      <Container className="temperatureNow">
        <h1>{city?.current_observation.condition.temperature}&#186; C</h1>
        <h1>{city?.current_observation.condition.text}</h1>
      </Container>
      <Container className="container-data">
        <Container className="container-data-line1">
          <div>
            <span>
              <FiArrowUp size={10} color="#000" />
              16
            </span>{' '}
            <span>
              <FiArrowDown size={10} color="#000" />
              25
            </span>
          </div>
          <div>
            <p>Feel like</p>
            <span>{city?.current_observation.wind.chill}&#186; C</span>
          </div>
        </Container>
        <Container className="container-data-line1">
          <div>
            <p>Wind</p>
            <span>{city?.current_observation.wind.speed}km/h</span>
          </div>
          <div>
            <p>Humidity</p>
            <span>{city?.current_observation.atmosphere.humidity}%</span>
          </div>
        </Container>
      </Container>
      <hr className="lineWeek" />
      <Container className="DaysOfWeek">
        {city?.forecasts.map((day, index) => {
          while (index < 5) {
            return (
              <div key={day.day}>
                <span>{day.day}</span>
                <div>
                  <span>{day.low}&#186;</span>
                  <span>{day.high}&#186;</span>
                </div>
              </div>
            );
          }
        })}
      </Container>
    </Container>
  );
}
