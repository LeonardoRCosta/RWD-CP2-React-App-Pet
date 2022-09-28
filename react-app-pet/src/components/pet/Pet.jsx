import React from 'react'

export default function Pet(props) {
  return (
    <div>
        <h2>Nome: {props.nome}</h2>
        <h3>Idade: {props.idade}</h3>
        <p>Raça: {props.raca}</p>
        <p>Tamanho: {props.tamanho}</p>
        <p>Nome do Dono: {props.nmDono}</p>
        <p>Telefone do Dono: {props.telDono}</p>
        <p>Imagem do Pet: {props.imgPet}</p>
        <p>Observações: {props.obs}</p>
    </div>
  )
}
