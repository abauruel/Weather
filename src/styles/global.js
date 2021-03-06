import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*{
  margin:0;
  padding:0;
  outline:0;
  box-sizing: border-box;
}

html, body, #root{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

body{
  background: linear-gradient(-0deg, #00b4db, #0083b0);
  -webkit-font-smoothing: antialiased !important;
}

ul{
  list-style: none;
    }

`;
