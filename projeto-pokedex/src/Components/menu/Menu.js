import React, {useState} from 'react'
import LogoPokemon from '../../assets/Logo-Pokebola.png'
import { useNavigate } from 'react-router-dom'
import * as C from './styled'


const Menu = (props) => {
    const [paginaAtual, setPaginaAtual] = useState("")
    const [pokemonAdicionado, setPokemonAdicionado] = useState()
    const navigate = useNavigate()
    const listaPokemon = () => {
        navigate("/")
      }

      const pokedex = () => {
        navigate("/pokedex")
      }



  return (
    <C.Menu>
        <C.Container>
            
            <C.Nav onClick={() => pokedex(props.pokemonAdicionado)}  pokedex={true}>
                Pokedex
            </C.Nav>

            <C.Nav>
                <C.ImagemPokebola src={LogoPokemon} />
            </C.Nav>

            
            <C.Nav onClick={listaPokemon}>
                Lista Pokemon
            </C.Nav>
        </C.Container>
    </C.Menu>
  )
  }

  export default Menu
