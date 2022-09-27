import React from 'react'
import { Botao, DivFormulario } from '../../style/styled';

export default function Formulario(props) {
    return (
      <DivFormulario>
        <h2>{props.nome}</h2>
        <p>{props.idade}</p>
        <p>{props.raca}</p>
        <p>{props.tamanho}</p>
        <p>{props.nmDono}</p>
        <p>{props.telDono}</p>
        <p>{props.obs}</p>
        <Botao onClick={props.remove}>X</Botao>
      </ DivFormulario>
    )
  }