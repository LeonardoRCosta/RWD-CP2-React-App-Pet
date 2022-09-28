import React, { useState } from 'react'
import Pet from '../pet/Pet';
import PetCadastro from '../petCadastro/PetCadastro';

export default function ListaPet() {
  const [listaPets, setListaPets] = useState([{}])
  
  const addPet = (e) => {
    e.preventDefault();
    setNPet({nome: '', idade: '', raca: '', tamanho: '', nmDono: '', telDono: '', imgPet: '', obs: ''})
    setListaPets(...listaPets, nPet)
  }

  
  const [nPet, setNPet] = useState({nome: '', idade: '', raca: '', tamanho: '', nmDono: '', telDono: '', imgPet: '', obs: ''})

  const captura = (e) => {
    const { name, value } = e.target;
    if(name === 'nmPet') {
      setNPet({nome: value, idade: nPet.idade, raca: nPet.raca, tamanho: nPet.tamanho, nmDono: nPet.nmDono, telDono: nPet.telDono, imgPet: nPet.imgPet, obs: nPet.obs})
    }
    else if(name === 'idadePet') {
      setNPet({nome: nPet.nome, idade: value, raca: nPet.raca, tamanho: nPet.tamanho, nmDono: nPet.nmDono, telDono: nPet.telDono, imgPet: nPet.imgPet, obs: nPet.obs})
    }
    else if(name === 'racaPet') {
      setNPet({nome: nPet.nome, idade: nPet.idade, raca: value, tamanho: nPet.tamanho, nmDono: nPet.nmDono, telDono: nPet.telDono, imgPet: nPet.imgPet, obs: nPet.obs})
    }
    else if(name === 'tamanhoPet') {
      setNPet({nome: nPet.nome, idade: nPet.idade, raca: nPet.raca, tamanho: value, nmDono: nPet.nmDono, telDono: nPet.telDono, imgPet: nPet.imgPet, obs: nPet.obs})
    }
    else if(name === 'nmDono') {
      setNPet({nome: nPet.nome, idade: nPet.idade, raca: nPet.raca, tamanho: nPet.tamanho, nmDono: value, telDono: nPet.telDono, imgPet: nPet.imgPet, obs: nPet.obs})
    }
    else if(name === 'telDono') {
      setNPet({nome: nPet.nome, idade: nPet.idade, raca: nPet.raca, tamanho: nPet.tamanho, nmDono: nPet.nmDono, telDono: value, imgPet: nPet.imgPet, obs: nPet.obs})
    }
    else if(name === 'imgPet') {
      setNPet({nome: nPet.nome, idade: nPet.idade, raca: nPet.raca, tamanho: nPet.tamanho, nmDono: nPet.nmDono, telDono: nPet.telDono, imgPet: value, obs: nPet.obs})
    }
    else if(name === 'obs') {
      setNPet({nome: nPet.nome, idade: nPet.idade, raca: nPet.raca, tamanho: nPet.tamanho, nmDono: nPet.nmDono, telDono: nPet.telDono, imgPet: nPet.imgPet, obs: value})
    }
  }
  
  return (
    <div>
      <PetCadastro addPet={addPet} nPet={nPet} captura={captura}/>
      {listaPets.map((pet, i) => (
        
        <Pet
        key={i}
        nome={pet.nome}
        idade={pet.idade}
        raca={pet.raca}
        tamanho={pet.tamanho}
        nmDono={pet.nmDono}
        telDono={pet.telDono}
        imgPet={pet.imgPet}
        obs={pet.obs}
        />
      ))} 
    </div>
  );
}
