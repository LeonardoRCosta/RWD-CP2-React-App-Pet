import styled from 'styled-components';



export const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 1.5vh;
  input {
    padding: 1vh 0;
    outline: none;
    width: 30vw; 

  }
  textarea{
    width: 30vw;
    resize: none;
    outline: none;
  }
  
`
//--------------------
export const Botao = styled.button`
    border-radius : 5px;
    padding: 1vh 2vw;
    margin: auto;
    display: block;
    border: solid 2px #00ff00;
    color : #00ff00;
    font-size : 1.5rem;
`
export const DivForm = styled.div`
    width: 80vw;
    padding: 20px;
    background-color: #ccc;
    
    form{width:50%; margin:auto;}
    form input, form textarea{padding:5px; width:80%;}
    form textarea{height: 80px;}
    form button{padding: 10px; background: #3c3; color: #fff;}
`

export const DivFormulario = styled.div`
    background-color: #ffb;
    border: 2px solid #333;
    box-shadow: 5px 5px 5px #333;
    padding: 20px;
    text-align: center;
    width: 25vw;
    height: 60vh;
    margin: 10px;
    h2,p{ padding-bottom: 10px; }
`
export const DivLista = styled.div`
    width: 100vw;
    padding: 20px;
    min-height: 85vh;
    background-color: #993;
    display: flex; flex-wrap: wrap;
    justify-content: space-around;
    .btnTarefa{
        display: block;
        height:5vh;
        margin: auto;
        border-radius : 5px;
        padding: 1vh 2vw;
        border: solid 2px #00ff00;
        color : #00ff00;
        font-size : 1.5rem;    
    }
`
//--------------------

export const Button = styled.button`

border-radius : 2px;
    padding: 1vh  8vw;
    width: 30.5vw;
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
`;
