import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import * as P from './styled'
import styled from 'styled-components'

const Card = styled.div`
border: 1px solid;
margin: 10px;
padding:15px;
`
const ContainerCard = styled.div`
width: 300px;
`

export default function Detalhes() {
    const navigate = useNavigate ()
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
            
        <button onClick={home}> Home </button>
        <P.Container>
        <ion-icon size="large" name="arrow-back-outline"></ion-icon>
      </P.Container>

      <P.ContainerCard>Titulo Qualquer</P.ContainerCard>

      {
        pokemon.map((poke) => {
          return (
            <ContainerCard>
            <Card> 
              <img src={poke.sprites.front_shiny} />
              <p>name: {poke.name}</p>
              <p>{poke.stats[0].stat.name} : {poke.stats[0].base_stat} </p>
              <p>{poke.stats[1].stat.name} : {poke.stats[1].base_stat} </p>
              <p>{poke.stats[2].stat.name} : {poke.stats[2].base_stat} </p>
              <p>{poke.stats[3].stat.name} : {poke.stats[3].base_stat} </p>
              <p>{poke.stats[4].stat.name} : {poke.stats[4].base_stat} </p>
              <p>{poke.stats[5].stat.name} : {poke.stats[5].base_stat} </p>
              <p>type: {poke.types[0].type.name}  </p>
              <p>ability: {poke.abilities[0].ability.name}  </p>
              
              {console.log(poke)}
            </Card>
            </ContainerCard>
          )
        })
      } 
      
      </div>
    )
  }