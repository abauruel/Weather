import React from 'react';
import { Container } from './styles';
import Cities from '../../components/Cities';

export default function Home() {
  return (
    <Container>
      <form>
        <p>Previsão do Tempo</p>
        <input type="text" placeholder="digite sua cidade" />
        <hr />
        <Cities />
      </form>
    </Container>
  );
}
