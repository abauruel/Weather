import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;

    & + div {
      font-weight: bold;
    }
  }
`;
