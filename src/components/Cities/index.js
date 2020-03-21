import React from 'react';

import { Container } from './styles';

export default function Cities({ city }) {
  return (
    <Container>
      <ul>
        <li>
          <div>
            <small>Day</small>
            <small>Min</small>
            <small>Max</small>
            <small>City</small>
            <p />
          </div>
          {city && (
            <div>
              <p>{city.forecasts[0]?.day}</p>
              <p>{city.forecasts[0]?.low}&#186; C</p>
              <p>{city.forecasts[0]?.high}&#186; C</p>
              <p>{city.location?.city}</p>
            </div>
          )}
        </li>
      </ul>
    </Container>
  );
}
