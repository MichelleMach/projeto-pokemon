import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Menu from '../../Components/menu/Menu'
import * as P from './styled'
import axios from 'axios'
import { Pagination } from '@mui/material'
import Swal from "sweetalert2";
import Alert from '../../Components/SweetAlert'
import { GlobalContext } from '../../Context/GlobalStateContext'
import ProgressBar from '../../Components/ProgressBar/ProgressBar'
import useRequestData from '../../hooks/useRequestData'
import girar from './imagens/girar.png'


export default function Home(props) {
  const { states, setters } = useContext(GlobalContext)
  const [pokemon, setPokemon] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const pokemonLista = []
    states.listaPokemon.forEach((poke) => {
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

  }, [states.listaPokemon])

  const adicionarPokemon = (poke) => {
    console.log(poke)
    setters.setPokedex([...states.pokedex, poke])
  }

  const onChange = (e, value) => {
    setters.setpgn(value)

  }

  const alertPokedex = () => {
    
      Swal.fire({
        title: 'Você capturou um Pokémon!',
        text: 'Pokémon salvo na Pokedex.',
        imageUrl: 'https://i.gifer.com/Kcrm.gif',
        imageWidth: 400,
        imageHeight: 225,
        imageAlt: 'Custom image',
      })
    
  }


  return (
    <div>

      {/* <Sweetalertdemo /> */}


      <Menu />

      <P.ContainerCard>
        {
          pokemon.map((poke) => {
            return (
              <P.CardTodo key={poke.id}>
                <P.CardA>

                  

                  <P.ImagemPoke src={poke.sprites.other.dream_world.front_default} />

                  <P.Botoes>
                    <P.Name><strong>{poke.name.toUpperCase()}</strong></P.Name>
                    <P.Girar src={girar} />
                  </P.Botoes>
                  
                </P.CardA>


                <P.CardB>

                  <P.Paragrafos>


                    <P.CTp>
                    <P.TipoP>{poke.types[0].type.name.toUpperCase()}</P.TipoP>
                    <P.Tipo># {poke.id}</P.Tipo>
                  </P.CTp>
                    {/* <ProgressBar /> */}

                    <P.Table>
                      <P.Tr>
                        <P.Th>Poke-Habilidades</P.Th>
                      </P.Tr>
                      <P.Tr>
                        <P.Td>Ataque</P.Td>  <P.Td2>{poke.stats[1].base_stat} </P.Td2>
                      </P.Tr>
                      <P.Tr>
                        <P.Td> Defesa</P.Td> <P.Td2> {poke.stats[2].base_stat} </P.Td2>
                      </P.Tr>
                      <P.Tr>
                        <P.Td>Velocidade</P.Td> <P.Td2>{poke.stats[5].base_stat}</P.Td2>
                      </P.Tr>
                      <P.Tr>
                        <P.Td>Resistência </P.Td>  <P.Td2> {poke.stats[0].base_stat}</P.Td2>
                      </P.Tr>

                      <P.Tr>
                        <P.Td>Ataque-especial</P.Td>  <P.Td2>{poke.stats[3].base_stat} </P.Td2>
                      </P.Tr>
                      <P.Tr>
                        <P.Td>Defesa-especial</P.Td> <P.Td2>{poke.stats[4].base_stat} </P.Td2>
                      </P.Tr>

                    </P.Table>


                    <br />
                    <P.BotaoAdicionar onClick={() =>(alertPokedex(), adicionarPokemon(poke))}>Capturar Pokemon</P.BotaoAdicionar>

                  </P.Paragrafos>

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