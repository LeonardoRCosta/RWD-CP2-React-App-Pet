import React from 'react'
import { Form, Button} from '../../style/styled';
import ListaFormulario from '../teste/ListaFormulario';

export default function PetCadastro() {

  return (
    <div>
      <h1>Dados do Pet</h1>
      <ListaFormulario/>
      <Form action="#">
        <label htmlFor="nmPet">Nome</label>
        <input type="text" name="nomePet" />
        <label htmlFor="idadePet">Idade</label>
        <input type="text" name="idadePet" />
        <label htmlFor="racaPet">Raça</label>
        <input type="text" name="racaPet" />
        <label htmlFor="tamanhoPet">Tamanho</label>
        <input type="text" name="tamanhoPet" />
        <label htmlFor="nmDono">Nome do Dono</label>
        <input type="text" name="nmDono" />
        <label htmlFor="telDono">Telefone do Dono</label>
        <input type="text" name="telDono" />
        <label htmlFor="imgPet">Imagem do Pet</label>
        <input type="file" name="imgPet" />
        <label htmlFor="obs">Observações</label>
        <textarea name="obs" cols="30" rows="10"></textarea>

        <Button type='submit'>Adicionar</Button>
      </Form>
      
    </div>
  )
}
