import React from 'react'
import { DivPet } from '../../style/styled'

export default function Pet(props) {
  return (
    <DivPet>
        <h2>Nome: {props.nomePet}</h2>
        <h3>Idade: {props.idadePet}</h3>
        <p>Raça: {props.racaPet}</p>
        <p>Tamanho: {props.tamanhoPet}</p>
        <p>Nome do Dono: {props.nomeDono}</p>
        <p>Telefone do Dono: {props.telDono}</p>
        <p>Imagem do Pet: {props.imgPet}</p>
        <p>Observações: {props.obs}</p>
    </DivPet>
  )
}
