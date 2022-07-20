import React, {useState} from 'react'
import LogoPokemon from '../../assets/Logo-Pokebola.png'
import * as C from './styled'

const Menu = () => {
    const [paginaAtual, setPaginaAtual] = useState("")

    switch(paginaAtual) {
        case '/':
            return "abobora";

        case '/pokedex':
            return "batata"
    }


  return (
    <C.Menu>
        <C.Container>
            <C.Nav pokedex={"abobora"}>
                Pokedex
            </C.Nav>

            <C.Nav>
                <C.ImagemPokebola src={LogoPokemon} />
            </C.Nav>

            <C.Nav>
                Lista Pokemon
            </C.Nav>
        </C.Container>
    </C.Menu>
  )
}

export default Menu
