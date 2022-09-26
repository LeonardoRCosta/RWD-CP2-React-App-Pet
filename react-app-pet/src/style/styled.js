import styled from 'styled-components';
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 1.5vh;
  input {
    padding: 1vh 0;
    outline: none;
  }
  button {
    border-radius : 2px;
    padding: 1vh  8vw;
    margin: auto;
    border: solid 2px #277355;
    color : #faaf00;
    font-size : 1.2rem;
    :hover {
      background-color: #277352;
      color: #fff;
      transition: all .4s ease-in-out;
      border: solid 2px #faaf00;
    }
  }
`;
