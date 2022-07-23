import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ListarPokemon from './page/lista-pokemons/ListaPokemons'
import Batalha from './page/batalha/BatalhaPokemon'
import Pokedex from './Components/Pokedex/Pokedex'

export default function Router() {
 
    return (
        <BrowserRouter>
        <Routes>
          <Route index element = {<Batalha/>}/>
          <Route path = "lista" element = {<ListarPokemon/>}/>
          
          <Route path = "pokedex" element = {<Pokedex/>}/>
          </Routes>
        </BrowserRouter> 
   )
  }

