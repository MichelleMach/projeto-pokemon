import Typography from '@mui/material/Typography';
import PokeBattleCard from './PokeBattleCard';
import Menu from '../../Components/menu/Menu';
import * as C from './styled'
import { useEffect, useState } from 'react'

const PokeBattle = () => {
  const [pokeNameRight, setPokeNameRight] = useState("")
  const [pokeNameLeft, setPokeNameLeft] = useState("")
  const [totalRight, setTotalRight] = useState(0)
  const [totalLeft, setTotalLeft] = useState(0)
  const [winner, setWinner] = useState("")

  const compareStats = () => {
    if (totalLeft && totalRight) {
      if (totalRight > totalLeft) {
        setWinner(pokeNameRight.charAt(0).toUpperCase() + pokeNameRight.slice(1))
      } else if (totalLeft > totalRight) {
        setWinner(pokeNameLeft.charAt(0).toUpperCase() + pokeNameLeft.slice(1))
      } else {
        setWinner("Empate!")
      }
    }
  }

  useEffect(() => {
    compareStats()
  }, [totalLeft, totalRight])

  return (
    <>
      {/* <Menu /> */}
      <C.Background>
        <C.BatalhaPokemons>
          <PokeBattleCard
            pokeName={pokeNameLeft}
            setPokeName={setPokeNameLeft}
            setTotal={setTotalLeft}
          />

          <C.ContainerWinner id='middle-container'>
            <Typography variant='h4' color='white'><strong>VS</strong></Typography>
            {(totalLeft && totalRight) && (totalLeft !== totalRight) ?
              <Typography variant='h5' color='white'><ion-icon name="trophy-outline"></ion-icon></Typography> : <></>
            }
            <Typography variant='h4' color='white'><strong>{winner}</strong></Typography>
          </C.ContainerWinner>
          
          <PokeBattleCard
            pokeName={pokeNameRight}
            setPokeName={setPokeNameRight}
            setTotal={setTotalRight}
          />
        </C.BatalhaPokemons>
      </C.Background>
    </>
  )
}

export default PokeBattle