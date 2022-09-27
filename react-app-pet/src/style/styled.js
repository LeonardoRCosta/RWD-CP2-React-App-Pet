import styled from 'styled-components';
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 1.5vh;
  input {
    padding: 1vh 0;
    outline: none;
  }
  
`;

export const Button = styled.button`

border-radius : 2px;
    padding: 1vh  8vw;
    margin: auto;
    border: solid px #277355;
    border-radius: 5px;
    color : #000;
    font-size : 1.2rem;
    background-color: #faaf00;
    :hover {
      background-color: #277352;
      color: #000;
      transition: all .4s ease-in-out;
      border: solid 2px #000;


    }
`
