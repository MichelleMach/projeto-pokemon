import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../Context/GlobalStateContext'
import Menu from '../menu/Menu'
import * as C from './styled'


export default function Pokedex() {
  const navigate = useNavigate()

  const { states } = useContext(GlobalContext)
  const [pokemonsAdd, setPokemonsAdd] = useState (states.pokedex)

  // const removerPokemon = (novoPokemon) => {
  //   setPokedex(state.pokedex.filter(pokemon => novoPokemon.name !== pokemon.name))
  // }

  // const exibirPokemons = states.pokedex & states.pokedex.map((pokemon) => {
  //   console.log(states.pokedex)
  //   return (
  //     <div key={pokemon.name}>
  //       {console.log(pokemon.name)}
  //       <div>
  //         <p>#{pokemon.order}</p>
  //         <div>
  //           <p>{pokemon.types[0].type.name}</p>
  //         </div>
  //         <div>
  //           <img alt={pokemon} src={pokemon.sprites.front_default} />
  //         </div>


  //       </div>
  //     </div>
  //   )
  // })


  return (
    <div>
      <Menu />

      {pokemonsAdd.map((pokemon) => {
        
        return (
          <C.ContainerCard>
            {pokemon.name}
            <div>
              <p>#{pokemon.order}</p>
              <div>
                <p>{pokemon.types[0].type.name}</p>
              </div>
              <div>
                <img alt={pokemon} src={pokemon.sprites.front_default} />
                {console.log(pokemon)}
              </div>
            </div>
          </C.ContainerCard>
        )
      })
      }
    </div>
  )
} 