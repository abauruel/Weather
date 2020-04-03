import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  form {
    width: 600px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    border-radius: 10px;

    > p {
      font-size: 40px;
      font-weight: bold;
      color: #fff;
    }
    > div.divsearch {
      position: relative;
      display: flex;
      flex-direction: row;
      margin: 10px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.12), inset 0 0 2px rgba(0, 0, 0, 0.19);

      button {
        position: absolute;
        right: 5px;
        top: 2px;
        background: none;
        padding: 3px;
        border: none;
        cursor: pointer;
      }
      input {
        padding: 5px 30px 5px 10px;
        font-size: 18px;
        border: none;
        border-radius: 4px;
      }
    }

    hr {
      margin: 10px;
      border: 0.5px solid #fff;
      width: 400px;
    }
  }
`;
