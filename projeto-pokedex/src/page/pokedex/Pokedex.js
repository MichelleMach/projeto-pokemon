
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Menu from '../../Components/menu/Menu'

export default function Pokedex(props) {
    const navigate = useNavigate()
    const [listaPokemonsAdicionados, setListaPokemon] = useState([])
    const [pokedex, setPokedex] = useState({})

    const listapokemon = () => {
        navigate("/")
      }
    const removerPokemon = (novoPokemon) => {
        setPokedex(pokedex.filter(pokemon => novoPokemon.name !== pokemon.name))
    }

    console.log(props)

    return (

        <div>
            <Menu />
            <h1>Meus Pokemóns</h1>

            {/* {
                listaPokemonsAdicionados.map((pokemon, indice) => {
                    return (
                        <div key={pokemon.id}>
                            <p>{pokemon.name}</p>
                        </div>
                    )
                })
            } */}
        </div>
    )

}