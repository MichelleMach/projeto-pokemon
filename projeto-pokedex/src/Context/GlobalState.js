import { GlobalContext } from "./GlobalStateContext";
import axios from "axios";
import { useState, useEffect } from "react";

export default function GlobalState(props) {
    const [listaPokemon, setListaPokemon] = useState([])
    const [pgn, setpgn] = useState(1)
    const [pokedex, setPokedex] = useState({})

    const conta = 22*(pgn-1)
 
  
  
useEffect(() => {
      axios.get(`https://pokeapi.co/api/v2/pokemon?limit=21&offset=${conta}`)
        .then((res) => {
          setListaPokemon(res.data.results)
          console.log(res.data.results)
        }).catch((err) => {
          console.log(err.response)
        })
    }, [pgn])

    const states = {pgn, listaPokemon, pokedex}
    const setters = {setPokedex, setpgn  }

return (
    <GlobalContext.Provider value={{ states, setters }}>
        {props.children}
    </GlobalContext.Provider>
)}