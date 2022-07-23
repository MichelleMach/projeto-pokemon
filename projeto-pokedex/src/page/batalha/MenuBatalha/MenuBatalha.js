import React, {useState} from 'react'
import LogoPokemon from '../../../assets/Logo-Pokebola.png'
import { useNavigate } from 'react-router-dom'
import * as C from './styled'


const MenuBatalha = (props) => {
    const [paginaAtual, setPaginaAtual] = useState("")
    const [pokemonAdicionado, setPokemonAdicionado] = useState()
    const navigate = useNavigate()
    const listaPokemon = () => {
        navigate("/lista")
      }

      const pokedex = () => {
        navigate("/pokedex")
      }

      const batalha = () => {
        navigate("/")
      }



  return (
    <C.Menu>
        <C.Container>
            
            <C.Nav onClick={() => pokedex(props.pokemonAdicionado)}  pokedex={true}>
            <C.TextoBotao>Pokebola
            </C.TextoBotao>
            </C.Nav>

            <C.Nav>
                <C.ImagemPokebola src={LogoPokemon} onClick={batalha}/>
            </C.Nav>

            
            <C.Nav onClick={listaPokemon}>
            <C.TextoBotao>Lista de Pokemon
            </C.TextoBotao>
            </C.Nav>
        </C.Container>
    </C.Menu>
  )
  }

  export default MenuBatalha