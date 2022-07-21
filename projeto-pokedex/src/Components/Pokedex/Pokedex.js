import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

export default function Pokedex(props) {
    const navigate = useNavigate ()
  const [pokedex, setPokedex] = useState({})
    const home = () => {
      navigate("/")
    }
const removerPokemon = (novoPokemon)=>{
setPokedex(pokedex.filter(pokemon =>novoPokemon.name !== pokemon.name))
}

  

    
    const listaDeCards = pokedex?.map((pokemon)=>{

  
         
    return (
      <div>
           <h1>Meus Pokemóns</h1>
        <div key={pokemon.name}>
<div> 
  <p>#{pokemon.order}</p>
<div>
<p>{pokemon.types[0].type.name}</p>
</div>
<div>
<img alt ={pokemon} src={poke.sprites.front_default}/>
</div>
<button onClick={Detalhes}>Detalhes</button>
<button onClick={removerPokemon}>Excluir</button>
        <button onClick={home}> Home </button>

 
</div>
            
    
          
      </div>
      </div>
    )}) 
  } 