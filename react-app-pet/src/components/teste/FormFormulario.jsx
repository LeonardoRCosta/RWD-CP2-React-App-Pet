import React from 'react'
import { DivForm } from '../../style/styled'

export default function FormFormulario(props) {
  return (

    <DivForm>
        <form method='POST' onSubmit={props.addFormulario}>

        <label htmlFor="nmPet">Nome</label>
        <input name='nomePet' value={props.formulario.nome} onChange={props.digit} />

        <label htmlFor="idadePet">Idade</label>
        <input name='idadePet' value={props.formulario.idade} onChange={props.digit} />

        <label htmlFor="racaPet">Raça</label>
        <input name='racaPet' value={props.formulario.raca} onChange={props.digit} />

        <label htmlFor="tamanhoPet">Tamanho</label>
        <input name='tamanhoPet' value={props.formulario.tamanho} onChange={props.digit} />

        <label htmlFor="nmDono">Nome do Dono</label>
        <input name='nmDono' value={props.formulario.nmDono} onChange={props.digit} />

        <label htmlFor="telDono">Telefone do Dono</label>
        <input name='telDono' value={props.formulario.telDono} onChange={props.digit} />

        <label htmlFor="imgPet">Imagem do Pet</label>
        <input type="file" name="imgPet" />

        <label htmlFor="obs">Observações</label>
        <textarea name='obs' cols="30" rows="10" value={props.formulario.obs} onChange={props.digit} />

            <button type='submit'>Adicionar</button>
            
        </form>
    </DivForm>
  )
}