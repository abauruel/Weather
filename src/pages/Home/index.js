import React, { useState } from 'react';
import oauth from 'oauth';
import { FaSearch } from 'react-icons/fa';
import { Container } from './styles';
import Cities from '../../components/Cities';

export default function Home() {
  const [city, setCity] = useState('');
  const [inputCity, setInputCity] = useState('');

  function CheckForecast(e) {
    e.preventDefault();
    const header = { 'X-Yahoo-App-Id': 'yPloG656' };
    const request = new oauth.OAuth(
      null,
      null,
      'dj0yJmk9cDJ1Q2E2OFdzYjVhJmQ9WVdrOWVWQnNiMGMyTlRZbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTBk',
      '0aa1ab7698462cfd6450e33e78af6b4f47a47485',
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
          console.tron.log(city);
        }
      }
    );
  }
  return (
    <Container>
      <form>
        <p>Weather Forecast</p>
        <div>
          <p>{city?.location?.city}</p>
        </div>
        <div>
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
        <hr />
        <Cities city={city} />
      </form>
    </Container>
  );
}
