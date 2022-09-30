import React from "react";
import { Form, Button } from "../../style/styled";

export default function PetCadastro(props) {
  return (
    <div>
      <Form method="post" onSubmit={props.addPet}>
        <h1>🦴&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dados do Pet&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🦴</h1>
        <label htmlFor="nomePet">Nome</label>
        <input
          type="text"
          name="nomePet"
          value={props.novoPet.nomePet}
          onChange={props.captura}
        />
        <label htmlFor="idadePet">Idade</label>
        <input
          type="text"
          name="idadePet"
          value={props.novoPet.idadePet}
          onChange={props.captura}
        />
        <label htmlFor="racaPet">Raça</label>
        <input
          type="text"
          name="racaPet"
          value={props.novoPet.racaPet}
          onChange={props.captura}
        />
        <label htmlFor="tamanhoPet">Tamanho</label>
        <input
          type="text"
          name="tamanhoPet"
          value={props.novoPet.tamanhoPet}
          onChange={props.captura}
        />
        <label htmlFor="nomeDono">Nome do Dono</label>
        <input
          type="text"
          name="nomeDono"
          value={props.novoPet.nomeDono}
          onChange={props.captura}
        />
        <label htmlFor="telDono">Telefone do Dono</label>
        <input
          type="text"
          name="telDono"
          value={props.novoPet.telDono}
          onChange={props.captura}
        />
        <label htmlFor="imgPet">Imagem do Pet</label>
        <input
          type="file"
          accept=".jpg, .gif, .png"
          name="imgPet"
          id="imgPetId"
          value={props.novoPet.imgPet}
          onChange={props.captura}
        />
        <label htmlFor="obs">Observações</label>
        <textarea
          name="obs"
          cols="30"
          rows="10"
          value={props.novoPet.obs}
          onChange={props.captura}></textarea>

        <Button type="submit">Adicionar</Button>
      </Form>
    </div>
  );
}
