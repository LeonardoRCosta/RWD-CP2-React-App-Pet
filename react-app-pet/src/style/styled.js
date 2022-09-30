import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 1.5vh;
  h1 {
    background-color: #faaf00;
    padding: 1vh;
    border-radius: 5px;
    box-shadow: -3px 3px 5px 0 rgba(0, 0, 0, 0.5);
    font-weight: 100;
  }
  input {
    padding: 1vh 0;
    outline: none;
    width: 30vw;
    min-width: 200px;
  }
  #imgPetId {
    cursor: pointer;
  }
  textarea {
    width: 30vw;
    min-width: 200px;
    resize: none;
    outline: none;
  }
`;

export const Button = styled.button`
  border-radius: 2px;
  padding: 1vh 8vw;
  min-width: 205px;
  width: 30.5vw;
  border: solid px #277355;
  border-radius: 5px;
  color: #000;
  font-size: 1.2rem;
  background-color: #faaf00;
  :hover {
    background-color: #277352;
    color: #000;
    transition: all 0.4s ease-in-out;
    border: solid 2px #000;
    cursor: pointer;
  }
`;

export const DivContainer = styled.div`
  display: flex;
  column-gap: 40px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 80%;
  }
`;

export const DivListaPets = styled.div`
  display: flex;
  column-gap: 30px;
  flex-wrap: wrap;
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`;

export const DivPet = styled.div`
  background-color: rgba(255, 255, 128, .5);
  box-shadow: 3px 3px 5px 0 rgb(0, 0, 0, 0.6);
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  height: 450px;
  width: 300px;
  figure {
    display: flex;
    justify-content: center;
  }
  h2 {
    text-align: center;
    font-weight: 100;
  }
  @media (max-width: 800px) {
    height: 80%;
  }
`;

export const PetImg = styled.img`
  width: 150px;
  border-radius: 5px;
`;
