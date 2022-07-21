import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import * as P from './styled'
import styled from 'styled-components'

const ContainerTodo = styled.div`
border: 1px solid;
border-radius: 10px;
background-color: red;
width: 100%;
height: 100%;
 position: relative;
transition: transform 1s;
transform-style: preserve-3d;
text-align: center;
:hover {
transform: rotateY(180deg)
}
`

const CardA = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: justify;
padding: 20px;
color: #456075;
position: absolute;
width: 100%;
height: 100%;
backface-visibility: hidden;
margin: 20px;
`
const CardB = styled.div`
background-color: purple;
display: flex;
flex-direction: column;
transform: rotateY(180deg);
position: absolute;
 width: 100%;
height: 1000%;
backface-visibility: hidden;
`

const Img = styled.img`
width: 200px;
border: 1px solid;
`
const Name = styled.p`
font-size: large;
color: lime;
`
const NovoContainer = styled.div`
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
width: 230px;
height: 350px;
margin:40px 20px;
border: 3px solid lime;
`
export default function Detalhes() {
  const navigate = useNavigate()
  const [listaPokemon, setListaPokemon] = useState([])
  const [pokemon, setPokemon] = useState([])
  const home = () => {
    navigate("/")
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
      <button onClick={home}> Home </button>
      <P.Container>
        <ion-icon size="large" name="arrow-back-outline"></ion-icon>
      </P.Container>
      <P.ContainerCard>Titulo Qualquer</P.ContainerCard>
      <NovoContainer>
      {
          pokemon.map((poke) => {
            return (
              <ContainerTodo>
                <CardA>
                  <Img src={poke.sprites.other.dream_world.front_default} />
                  <Name><strong>{poke.name.toUpperCase()}</strong></Name>
                </CardA>
                <CardB>
                  <p>{poke.stats[0].stat.name} : {poke.stats[0].base_stat} </p>
                  <p>{poke.stats[1].stat.name} : {poke.stats[1].base_stat} </p>
                  <p>{poke.stats[2].stat.name} : {poke.stats[2].base_stat} </p>
                  <p>{poke.stats[3].stat.name} : {poke.stats[3].base_stat} </p>
                  <p>{poke.stats[4].stat.name} : {poke.stats[4].base_stat} </p>
                  <p>{poke.stats[5].stat.name} : {poke.stats[5].base_stat} </p>
                  <p>type: {poke.types[0].type.name}  </p>
                  <p>ability: {poke.abilities[0].ability.name}  </p>
                </CardB>
              </ContainerTodo>
            )
          })
        }
        </NovoContainer>
      </div>
  )
        }