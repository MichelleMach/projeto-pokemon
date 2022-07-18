import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate ()
  
    const detalhes = () => {
      navigate("/detalhes")
    }
  
    const pokedex = () => {
      navigate("/pokedex")
    }
         
    return (
      <>
            
        <button onClick={detalhes}> Detalhes </button>
        <button onClick={pokedex}> Pokedex </button>
      
      </>
    )
  }