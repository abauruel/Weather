import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 4px;
  margin-top: 5px;
  padding: 10px 20px;

  div {
    position: relative;
    button {
      position: absolute;
      right: 8px;
      border: none;
      width: 10px;
    }
  }

  &.temperatureNow {
    width: 300px;
    display: flex;
    flex-direction: row;
    padding: 5px;
    margin-left: 10px;
    width: auto;
    justify-content: center;

    h1 + h1 {
      margin-left: 30px;
    }
  }
  &.container-data {
    display: flex;
    flex-direction: column;
    padding: 5px 10px;
    margin-left: 0px;
    width: auto;
  }
  &.container-data-line1 {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-radius: 0;
    padding: 5px 0;
    width: auto;
    div {
      display: flex;
      flex-direction: row;
      margin: auto;
    }
  }
  strong {
    font-size: 12px;
    padding: 5px 10px;
    margin-left: 10px;
  }
  p {
    font-size: 12px;
    color: #666;
  }
  span {
    :nth-child(1) {
      margin-left: 0;
    }
    margin-left: 5px;
    font-size: 12px;
    font-weight: bold;
  }
  hr {
    &.lineWeek {
      border: 1px solid #333;
      width: auto;
      margin: 0px 10px;
    }
  }
  &.DaysOfWeek {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: auto;
    div {
      margin: 5px 5px 5px 5px;
      padding-right: 5px;
      div {
        margin: 0;
        justify-content: flex-start;
        align-items: center;
        > span {
          font-weight: 500;
        }
      }
    }
  }
`;
