import React from "react";
import { DivPet, PetImg } from "../../style/styled";

export default function Pet(props) {
  return (
    <DivPet>
      <figure>
        <PetImg src={props.imgPet} alt="Imagem do pet" />
      </figure>
      <h2>{props.nomePet}</h2>
      <p>Idade: {props.idadePet}</p>
      <p>Raça: {props.racaPet}</p>
      <p>Tamanho: {props.tamanhoPet}</p>
      <p>Nome do Dono: {props.nomeDono}</p>
      <p>Telefone do Dono: {props.telDono}</p>
      <p>Observações: {props.obs}</p>
    </DivPet>
  );
}
