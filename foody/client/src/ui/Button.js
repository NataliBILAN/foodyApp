import styled from 'styled-components';

export const Button = styled.button`
  box-shadow: inset 0px 1px 0px 0px #dcecfb;
  background: linear-gradient(to bottom, #bddbfa 5%, #80b5ea 100%);
  background-color: #bddbfa;
  border-radius: 6px;
  border: 1px solid #84bbf3;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: 'Patrick Hand', cursive;
  font-size: 16px;
  font-weight: bold;
  padding: 6px 24px;
  text-transform: uppercase;
  text-shadow: 0px 1px 0px #528ecc;
  outline: none;

  :hover {
    background: linear-gradient(to bottom, #80b5ea 5%, #bddbfa 100%);
    background-color: #80b5ea;
  }
`;
