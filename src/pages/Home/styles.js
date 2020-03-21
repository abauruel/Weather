import styled from 'styled-components';

export const Container = styled.div`
  form {
    background: linear-gradient(-0deg, #fdc830, #f37335);
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
    input {
      margin: 30px 20px;
      width: 300px;
      padding: 5px 10px;
      font-size: 18px;
      border: none;
      border-radius: 4px;
    }
    hr {
      margin: 10px;
      border: 0.5px solid #fff;
      width: 400px;
    }
  }
`;
