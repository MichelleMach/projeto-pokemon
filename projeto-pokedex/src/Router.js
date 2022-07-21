import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Detalhes from './Components/Detalhes'
import Pokedex from '../src/Components/Pokedex/Pokedex'

export default function Router() {
 
    return (
        <BrowserRouter>
        <Routes>
          <Route index element = {<Home/>}/>
          <Route path = "detalhes" element = {<Detalhes/>}/>
          <Route path = "pokedex" element = {<Pokedex/>}/>
          </Routes>
        </BrowserRouter> 
   )
  }

