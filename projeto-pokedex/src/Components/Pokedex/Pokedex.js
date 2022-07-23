import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../Context/GlobalStateContext'
import Menu from '../menu/Menu'
import * as C from './styled'


export default function Pokedex() {
  const navigate = useNavigate()

  const { states } = useContext(GlobalContext)
  const [pokemonsAdd, setPokemonsAdd] = useState (states.pokedex)



  return (
    <div>
      <Menu />

      {pokemonsAdd.map((pokemon) => {
        
        return (
          <C.Container>
          <C.ContainerCard>
                <C.PokeImg alt={pokemon} src={pokemon.sprites.front_default} />
                {console.log(pokemon)}
            {pokemon.name}
            <div>
            <button>Excluir</button>
              <p>#{pokemon.order}</p>
              <div>
                <p>{pokemon.types[0].type.name}</p>
              </div>
              <div>
              </div>
            </div>
          </C.ContainerCard>
        </C.Container>
        )
      })
      }
    </div>
  )
} 