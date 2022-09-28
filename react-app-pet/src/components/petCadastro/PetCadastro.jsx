import React from 'react'
import { Form, Button} from '../../style/styled';


export default function PetCadastro(props) {
  
  return (
    <div>
      <h1>Dados do Pet</h1>
      <Form method='POST' onSubmit={props.addPet}>
        <label htmlFor="nmPet">Nome</label>
        <input type="text" name="nmPet" value={props.nPet.nome} onChange={props.captura}/>
        <label htmlFor="idadePet">Idade</label>
        <input type="text" name="idadePet" value={props.nPet.idade} onChange={props.captura}/>
        <label htmlFor="racaPet">Raça</label>
        <input type="text" name="racaPet" value={props.nPet.raca} onChange={props.captura}/>
        <label htmlFor="tamanhoPet">Tamanho</label>
        <input type="text" name="tamanhoPet" value={props.nPet.tamanho} onChange={props.captura}/>
        <label htmlFor="nmDono">Nome do Dono</label>
        <input type="text" name="nmDono" value={props.nPet.nmDono} onChange={props.captura}/>
        <label htmlFor="telDono">Telefone do Dono</label>
        <input type="text" name="telDono" value={props.nPet.telDono} onChange={props.captura}/>
        <label htmlFor="imgPet">Imagem do Pet</label>
        <input type="text" name="imgPet" value={props.nPet.imgPet} onChange={props.captura}/>
        <label htmlFor="obs">Observações</label>
        <textarea name="obs" cols="30" rows="10" value={props.nPet.obs} onChange={props.captura}></textarea>

        <Button type='submit'>Adicionar</Button>
      </Form>
      
    </div>
  )
}
