import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function Pokedex() {
    const navigate = useNavigate ()
  
    const home = () => {
      navigate("/")
    }
  
    
         
    return (
      <>
            
        <button onClick={home}> Home </button>
        
      
      </>
    )
  }