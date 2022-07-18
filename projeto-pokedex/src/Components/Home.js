import React, {useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import * as P from './styled'
import axios from 'axios'

export default function Home() {
    const [pokemons, setPokemon] = useState([])
    const [image, setImage] = useState("")
    const [contador, setContador] = useState(1)
    const navigate = useNavigate ()
    const params = useParams()
  
    const detalhes = () => {
      navigate("/detalhes")
    }
  
    const pokedex = () => {
      navigate("/pokedex")
    }

    useEffect(() => {
      getPokemons()
    },[] )

  
    const getPokemons = (id) => {
      axios.get(`https://pokeapi.co/api/v2/pokemon/35`)
      .then ((res) => {
        setImage(res.data.sprites.front_default)
      })
      .catch((err) => {
        console.log(err)

      })

    }
         
    return (
      <>
            
        <button onClick={detalhes}> Detalhes </button>
        <button onClick={pokedex}> Pokedex </button>

      <P.Container>
        <ion-icon size="large" name="arrow-back-outline"></ion-icon>
      </P.Container>

      <P.ContainerCard>Titulo Qualquer</P.ContainerCard>
      
          <img src={image} />

    
      </>
    )
  }