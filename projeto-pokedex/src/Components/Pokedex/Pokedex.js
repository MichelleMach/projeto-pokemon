import React, { useState} from 'react'
import {useNavigate} from 'react-router-dom'



export default function Pokedex(props) {
  const navigate = useNavigate ()
  const [pokedex, setPokedex] = useState({})
 
const removerPokemon = (novoPokemon)=>{
  setPokedex(pokedex.filter(pokemon =>novoPokemon.name !== pokemon.name))
}

const detalhes = () => {
  navigate("/detalhes")
  }
  
  const home = () => {
    navigate("/")
  }


  

  const exibirPokemons = pokedex?.map((pokemon)=>{
console.log(pokedex)
  
         
    return (
      <div>
           <h1>Meus Pokemóns</h1>
           {exibirPokemons}
        <div key={pokemon.name}>
<div> 
  <p>#{pokemon.order}</p>
<div>
<p>{pokemon.types[0].type.name}</p>
</div>
<div>
<img alt ={pokemon} src={pokemon.sprites.front_default}/>
</div>
<button onClick={detalhes}>Detalhes</button>
<button onClick={removerPokemon}>Excluir</button>
        <button onClick={home}> Home </button>

</div>  
      </div>
      </div>
    )}) 
  } 