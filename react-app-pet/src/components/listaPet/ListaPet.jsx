import React, { useState } from "react";
import Pet from "../pet/Pet";
import PetCadastro from "../petCadastro/PetCadastro";
import { DivContainer, DivListaPets } from "../../style/styled";

export default function ListaPet() {
  const [listaPets, setListaPets] = useState([
    {
      nomePet: "Almofadinhas",
      idadePet: "32 anos",
      racaPet: "Sem raça definida",
      tamanhoPet: "Médio",
      nomeDono: "Harry Potter",
      telDono: "(11) 99999-9999",
      imgPet:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQJw5ZKwBmSTjPY8wXmMW3Su2AONbl2Vo2gw&usqp=CAU",
      obs: "Talvez não seja um cachorro...",
    },
    {
      nomePet: "Rex",
      idadePet: "1 ano",
      racaPet: "Pitbull",
      tamanhoPet: "Grande",
      nomeDono: "Jão",
      telDono: "(11) 99999-9999",
      imgPet:
        "https://images.pexels.com/photos/800330/pexels-photo-800330.jpeg?auto=compress&cs=tinysrgb&w=600",
      obs: "Mansinho e dócil",
    },
  ]);

  const addPet = (e) => {
    e.preventDefault();
    setNovoPet({
      nomePet: "",
      idadePet: "",
      racaPet: "",
      tamanhoPet: "",
      nomeDono: "",
      telDono: "",
      imgPet: "",
      obs: "",
    });

    setListaPets([...listaPets, novoPet]);
  };

  const [novoPet, setNovoPet] = useState({
    nomePet: "",
    idadePet: "",
    racaPet: "",
    tamanhoPet: "",
    nomeDono: "",
    telDono: "",
    imgPet: "",
    obs: "",
  });

  const captura = (e) => {
    const { name, value } = e.target;

    if (name === "nomePet") {
      setNovoPet({
        nomePet: value,
        idadePet: novoPet.idadePet,
        racaPet: novoPet.racaPet,
        tamanhoPet: novoPet.tamanhoPet,
        nomeDono: novoPet.nomeDono,
        telDono: novoPet.telDono,
        imgPet: novoPet.imgPet,
        obs: novoPet.obs,
      });
    }
    if (name === "idadePet") {
      setNovoPet({
        nomePet: novoPet.nomePet,
        idadePet: value,
        racaPet: novoPet.racaPet,
        tamanhoPet: novoPet.tamanhoPet,
        nomeDono: novoPet.nomeDono,
        telDono: novoPet.telDono,
        imgPet: novoPet.imgPet,
        obs: novoPet.obs,
      });
    }
    if (name === "racaPet") {
      setNovoPet({
        nomePet: novoPet.nomePet,
        idadePet: novoPet.idadePet,
        racaPet: value,
        tamanhoPet: novoPet.tamanhoPet,
        nomeDono: novoPet.nomeDono,
        telDono: novoPet.telDono,
        imgPet: novoPet.imgPet,
        obs: novoPet.obs,
      });
    }
    if (name === "tamanhoPet") {
      setNovoPet({
        nomePet: novoPet.nomePet,
        idadePet: novoPet.idadePet,
        racaPet: novoPet.racaPet,
        tamanhoPet: value,
        nomeDono: novoPet.nomeDono,
        telDono: novoPet.telDono,
        imgPet: novoPet.imgPet,
        obs: novoPet.obs,
      });
    }
    if (name === "nomeDono") {
      setNovoPet({
        nomePet: novoPet.nomePet,
        idadePet: novoPet.idadePet,
        racaPet: novoPet.racaPet,
        tamanhoPet: novoPet.tamanhoPet,
        nomeDono: value,
        telDono: novoPet.telDono,
        imgPet: novoPet.imgPet,
        obs: novoPet.obs,
      });
    }
    if (name === "telDono") {
      setNovoPet({
        nomePet: novoPet.nomePet,
        idadePet: novoPet.idadePet,
        racaPet: novoPet.racaPet,
        tamanhoPet: novoPet.tamanhoPet,
        nomeDono: novoPet.nomeDono,
        telDono: value,
        imgPet: novoPet.imgPet,
        obs: novoPet.obs,
      });
    }
    if (name === "imgPet") {
      setNovoPet({
        nomePet: novoPet.nomePet,
        idadePet: novoPet.idadePet,
        racaPet: novoPet.racaPet,
        tamanhoPet: novoPet.tamanhoPet,
        nomeDono: novoPet.nomeDono,
        telDono: novoPet.telDono,
        imgPet: value,
        obs: novoPet.obs,
      });
    }
    if (name === "obs") {
      setNovoPet({
        nomePet: novoPet.nomePet,
        idadePet: novoPet.idadePet,
        racaPet: novoPet.racaPet,
        tamanhoPet: novoPet.tamanhoPet,
        nomeDono: novoPet.nomeDono,
        telDono: novoPet.telDono,
        imgPet: novoPet.imgPet,
        obs: value,
      });
    }
  };

  return (
    <DivContainer>
      <PetCadastro addPet={addPet} novoPet={novoPet} captura={captura} />
      <DivListaPets>
        {listaPets.map((pet, i) => (
          <Pet
            key={i}
            nomePet={pet.nomePet}
            idadePet={pet.idadePet}
            racaPet={pet.racaPet}
            tamanhoPet={pet.tamanhoPet}
            nomeDono={pet.nomeDono}
            telDono={pet.telDono}
            imgPet={pet.imgPet}
            obs={pet.obs}
          />
        ))}
      </DivListaPets>
    </DivContainer>
  );
}
