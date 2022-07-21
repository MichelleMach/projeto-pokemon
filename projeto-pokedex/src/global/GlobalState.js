import React, { useState, useEffect } from 'react'
import GlobalStateContext from './GlobalStateContext'
import useRequestData from "../hooks/useRequestData"

const GlobalState = (props) => {
    const [pokedex, setPokedex] = useState([])
    const [pokemonsHome, setPokemonsHome] = useState([])
    const [count, setCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const numberOfPage = 30 * (currentPage - 1)
    const [alertValue, setAlertValue] = useState(false)
    const [data, loading] = useRequestData({}, `https://pokeapi.co/api/v2/pokemon?limit=30&offset=${numberOfPage}`);


    useEffect(() => {
        setPokemonsHome(data.results)
    }, [data, currentPage])

    const states = { pokedex, pokemonsHome, count, currentPage, alertValue }
    const sets = { setPokedex, setPokemonsHome, setCount, setCurrentPage, setAlertValue }
    return (
        <GlobalStateContext.Provider value={{ states, sets, loading }}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState