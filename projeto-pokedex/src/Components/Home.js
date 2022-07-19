import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as P from './styled'
import axios from 'axios'

export default function Home() {
  const [listaPokemon, setListaPokemon] = useState([])
  const [pokemon, setPokemon] = useState([])
  const navigate = useNavigate()

  const detalhes = () => {
    navigate("/detalhes")
  }

  const pokedex = () => {
    navigate("/pokedex")
  }


  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon`)
      .then((res) => {
        setListaPokemon(res.data.results)
        console.log(res.data.results)
      }).catch((err) => {
        console.log(err.response)
      })
  }, [])


  useEffect(() => {
    const pokemonLista = []
    listaPokemon.forEach((poke) => {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${poke.name}`)
        .then((res) => {
         pokemonLista.push(res.data)
         if(pokemonLista.length ===20) {
          setPokemon(pokemonLista)
         }
        }).catch((err) => {
          console.log(err.response)
        })
    })
  
  }, [listaPokemon])

  console.log(pokemon)


  return (
    <div>

      <button onClick={detalhes}> Detalhes </button>
      <button onClick={pokedex}> Pokedex </button>

      <P.Container>
        <ion-icon size="large" name="arrow-back-outline"></ion-icon>
      </P.Container>

      <P.ContainerCard>Titulo Qualquer</P.ContainerCard>

      {
        pokemon.map((poke) => {
          return (
            <div> 
              <img src={poke.sprites.front_default} />
              {console.log(poke.sprites)}
            </div>
          )
        })
      }

      {/* {ListarPokemon} */}


    </div>
  )
}