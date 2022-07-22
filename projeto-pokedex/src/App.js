import React from 'react'
import Router from './Router'
import './App.css'
import GlobalState from './Context/GlobalState'

export default function App() {
  return (
    <div>
      <GlobalState>
      <Router/>
      </GlobalState>
    </div>
  )
}
