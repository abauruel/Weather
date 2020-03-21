import styled from 'styled-components';

export const Container = styled.div`
  form {
    background: linear-gradient(-0deg, #00b4db, #0083b0);
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
    > div {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      button {
        margin-top: 1px;
        margin-left: -50px;
        padding: 3px;
        border: none;
        cursor: pointer;
      }
      input {
        margin: 30px 20px;
        width: 300px;
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
