import React, { useState } from 'react'
import { DivLista } from '../../style/styled';
import FormFormulario from './FormFormulario';
import Formulario from './Formulario';

export default function ListaFormulario() {

  const [formulario, setFormulario] = useState([{
    nome: 'Dogui',
    idade: 'Dep. Vendas',
    raca: 'Levantar os valores de vendas',
    tamanho: 'Lista de Pagamento',
    nmDono: 'Dep. Vendas',
    telDono: 'Levantar os valores de vendas',
    obs: 'AAAA',
  },
  {
    nome: 'Gatu',
    idade: 'Dep. Pessoal',
    raca: 'Gerar planilhas',
    tamanho: 'Lista de Pagamento',
    nmDono: 'Dep. Vendas',
    telDono: 'Levantar os valores de vendas',
    obs: 'AAAA',
  },

]);

const [nFormulario, setNFormulario] = useState({
  nome:'', idade:'', raca:'',tamanho:'', nmDono:'', telDono:'',obs:''})

  const addFormulario = (e)=>{
    e.preventDefault()
    
    setNFormulario({nome:"",idade:"",raca:"",tamanho:"", nmDono:"", telDono:"",obs:""})


  }

  const captura = (e)=>{
    const {value,name} = e.target

    if(name === "nome"){
      setNFormulario({nome: value, idade: nFormulario.idade , raca: nFormulario.raca, tamanho: nFormulario.tamanho, nmDono: nFormulario.nmDono , telDono: nFormulario.telDono, obs: nFormulario.obs})

    }else if(name === "idade"){
      setNFormulario({nome: value, idade: nFormulario.value , raca: nFormulario.raca, tamanho: nFormulario.tamanho, nmDono: nFormulario.nmDono , telDono: nFormulario.telDono, obs: nFormulario.obs})

    }else if(name === "raca"){
      setNFormulario({nome: value, idade: nFormulario.idade , raca: nFormulario.value, tamanho: nFormulario.tamanho, nmDono: nFormulario.nmDono , telDono: nFormulario.telDono, obs: nFormulario.obs})

    }else if(name === "tamanho"){
      setNFormulario({nome: value, idade: nFormulario.idade , raca: nFormulario.raca, tamanho: nFormulario.value, nmDono: nFormulario.nmDono , telDono: nFormulario.telDono, obs: nFormulario.obs})

    }else if(name === "nmDono"){
      setNFormulario({nome: value, idade: nFormulario.idade , raca: nFormulario.raca, tamanho: nFormulario.tamanho, nmDono: nFormulario.value , telDono: nFormulario.telDono, obs: nFormulario.obs})
    }else if(name === "telDono"){
      setNFormulario({nome: value, idade: nFormulario.idade , raca: nFormulario.raca, tamanho: nFormulario.tamanho, nmDono: nFormulario.nmDono , telDono: nFormulario.value, obs: nFormulario.obs})

    }else if(name === "obs"){
      setNFormulario({nome: value, idade: nFormulario.idade , raca: nFormulario.raca, tamanho: nFormulario.tamanho, nmDono: nFormulario.nmDono , telDono: nFormulario.telDono, obs: nFormulario.value})
    }

  }

  const removerFormulario = tar => {
    let lista = formulario
    lista = lista.filter(t => t !== tar)
    setFormulario(lista)
  }




  return (

 

  <DivLista>
    <FormFormulario addFormulario={addFormulario} formulario={nFormulario} 
      digit={captura}/>
    {formulario.map((tar, i)=>(
      <Formulario
        key={i}
        nome={tar.nome}
        idade={tar.idade}
        raca={tar.raca}
        tamanho={tar.tamanho}
        nmDono={tar.nmDono}
        telDono={tar.telDono}
        obs={tar.obs}
        remove={removerFormulario.bind(this, tar)}
      />
    ))}
    {/* <button onClick={addFormulario}>Adicionar</button> */}
  </ DivLista>
  )
}