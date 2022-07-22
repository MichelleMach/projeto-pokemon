import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Menu from '../../Components/menu/Menu'
import * as P from './styled'
import axios from 'axios'
import { Pagination } from '@mui/material'
import Stack from '@mui/material/Stack'
// import { Chart } from "react-google-charts";
import Sweetalertdemo from '../../Components/SweetAlert'




export default function Home() {
  const [listaPokemon, setListaPokemon] = useState([])
  const [pokemon, setPokemon] = useState([])
  const [pokemonAdicionado, setPokemonAdicionado] = useState([])
  const navigate = useNavigate()
  const [pgn, setpgn] = useState(1)
  // const [options, setOptions] = {    title: 'Habilidades'}
  // const [data, setData] = [
  //   [`'Ataque', ${listaPokemon.stats[1].base_stat}`],
  //   [`'Defesa', ${pokemon.stats[2].base_stat}`],
  //  console.log(data)
  // ]


  const conta = 22 * (pgn - 1)


  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=21&offset=${conta}`)
      .then((res) => {
        setListaPokemon(res.data.results)
        console.log(res.data.results)
      }).catch((err) => {
        console.log(err.response)
      })
  }, [pgn])


  useEffect(() => {
    const pokemonLista = []
    listaPokemon.forEach((poke) => {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${poke.name}`)
        .then((res) => {
          pokemonLista.push(res.data)
          if (pokemonLista.length === 21) {
            setPokemon(pokemonLista)
            console.log(res.data)
          }
        }).catch((err) => {
          console.log(err.response)
        })
    })

  }, [listaPokemon])

  const adicionarPokemon = (poke) => {
    console.log(poke)
    setPokemonAdicionado([...pokemonAdicionado, poke])
  }



  // console.log(pokemon)

  const onChange = (e, value) => {
    setpgn(value)
  }


  return (
    <div>
      <Sweetalertdemo />


      <Menu pokemonAdicionado={pokemonAdicionado} />


      <P.ContainerCard>
        {
          pokemon.map((poke) => {
            return (
              <P.CardTodo>

                <P.CardA>
                  <P.ImagemPoke src={poke.sprites.other.dream_world.front_default} />

                  <P.Botoes>
                    <P.Name><strong>{poke.name.toUpperCase()}</strong></P.Name>
                    <P.BotaoAdicionar onClick={() => adicionarPokemon(poke)}>Capturar Pokemon</P.BotaoAdicionar>
                  </P.Botoes>
                </P.CardA>

                <P.CardB>
                  <P.CTp>
                    <P.Tipo>{poke.types[0].type.name.toUpperCase()}</P.Tipo>

                    {/* {
                    listaPokemon.map((type) => {
                      console.log(type)
                      return (
                        <p>{poke.types[1].type.name}</p>
                      )
                    }) 
          
                    }  */}




                  </P.CTp>
                  <P.Paragrafos>
                    {/* <Chart
            width={'500px'}
            height={'300px'}
            chartType="BarChart"
            data={[Ataque, Defesa, Resistencia]}
            options={[{poke.stats[1].base_stat}, {poke.stats[2].base_stat}, {poke.stats[5].base_stat}]}
          /> */}


                    <p>Ataque : {poke.stats[1].base_stat} </p>
                    <p>Defesa : {poke.stats[2].base_stat} </p>
                    <p>Velocidade : {poke.stats[5].base_stat} </p>
                    <p>Resistência : {poke.stats[0].base_stat} </p>
                    <p>Ataque-especial : {poke.stats[3].base_stat} </p>
                    <p>Defesa-especial : {poke.stats[4].base_stat} </p>


                  </P.Paragrafos>


                  <P.BotaoAdicionarVerso onClick={() => adicionarPokemon(poke)}>Capturar Pokemon</P.BotaoAdicionarVerso>

                </P.CardB>
              </P.CardTodo>
            )
          })

        }
      </P.ContainerCard>

      <P.Stack>
        <Pagination count={29} onChange={onChange} />
      </P.Stack>

    </div>
  )
}