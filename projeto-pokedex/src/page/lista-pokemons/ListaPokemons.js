import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Menu from '../../Components/menu/Menu'
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
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit-288offset=8`)
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
          if (pokemonLista.length === 20) {
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

      <Menu />

      <button onClick={detalhes}> Detalhes </button>
      <button onClick={pokedex}> Pokedex </button>

  
      {/* <P.Container> */}
      <P.ContainerCard>
        {
          pokemon.map((poke) => {
            return (
              <P.CardTodo>
                
              <P.CardA>
                <P.ImagemPoke src={poke.sprites.other.dream_world.front_default} />
                
                <P.Botoes>
                <P.Name><strong>{poke.name.toUpperCase()}</strong></P.Name>
                  {/* <P.BotaoDetalhe>Ver Detalhes</P.BotaoDetalhe> */}
                  <P.BotaoAdicionar>Adicionar a Pokedex</P.BotaoAdicionar>
                </P.Botoes>
              </P.CardA>

                <P.CardB>
                
                  <P.Paragrafos>
                  <p>Habilidades</p>
                  <br/>  
                  <p>Resistência : {poke.stats[0].base_stat} </p>
                  <p>Ataque : {poke.stats[1].base_stat} </p>
                  <p>Defesa : {poke.stats[2].base_stat} </p>
                  <p>Ataque-especial : {poke.stats[3].base_stat} </p>
                  <p>Defesa-especial : {poke.stats[4].base_stat} </p>
                  <p>Velocidade : {poke.stats[5].base_stat} </p>
                  <p>Tipo: {poke.types[0].type.name}  </p>
                  </P.Paragrafos> 
                </P.CardB>
                </P.CardTodo>
            )
          })
        }
         </P.ContainerCard>
      {/* </P.Container> */}

      {/* {ListarPokemon} */}


    </div>
  )
}