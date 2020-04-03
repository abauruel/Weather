import React, { useState } from 'react';
import oauth from 'oauth';
import { FaSearch } from 'react-icons/fa';
import { Container } from './styles';
import Cities from '../../components/Cities';
import InfoCity from '../../components/InfoCity';

export default function Home() {
  const [city, setCity] = useState('');
  const [inputCity, setInputCity] = useState('');

  function CheckForecast(e) {
    e.preventDefault();

    const header = { 'X-Yahoo-App-Id': process.env.REACT_APP_API_ID };
    const request = new oauth.OAuth(
      null,
      null,
      process.env.REACT_APP_CONSUMER_KEY,
      process.env.REACT_APP_CONSUMER_SECRET,
      '1.0',
      null,
      'HMAC-SHA1',
      null,
      header
    );

    request.get(
      `https://weather-ydn-yql.media.yahoo.com/forecastrss?location=${inputCity}&format=json&u=c`,
      null,
      null,
      function(err, data, result) {
        if (err) {
          console.log(err);
        } else {
          setCity(JSON.parse(data));
          console.log(data);
          setInputCity('');
        }
      }
    );
  }
  function handleClose() {
    setCity('');
  }
  return (
    <Container>
      <form>
        <p>Weather Forecast</p>
        {city && <InfoCity city={city} handleClose={handleClose} />}

        <div className="divsearch">
          <input
            type="text"
            placeholder="enter the city name"
            value={inputCity}
            onChange={e => setInputCity(e.target.value)}
          />
          <button type="submit" onClick={CheckForecast}>
            <FaSearch size={20} />
          </button>
        </div>
        {city && (
          <>
            <hr />
            <Cities city={city} />
          </>
        )}
      </form>
    </Container>
  );
}
