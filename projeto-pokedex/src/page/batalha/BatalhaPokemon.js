import Typography from '@mui/material/Typography';
import PokeBattleCard from './PokeBattleCard';
import MenuBatalha from './MenuBatalha/MenuBatalha';
import VS from '../../assets/vs.png'
import * as C from './styled'
import Swal from "sweetalert2";
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

    const vencedorBatalha = () => {
        Swal.fire({
            title: 'Vencedor',
            text: `${winner}`,
            imageUrl: 'https://i.gifer.com/7Iku.gif',
            imageWidth: 350,
            imageHeight: 350,
            imageAlt: 'Custom image',
        })
    };

    const empateBatalha = () => {
        Swal.fire({
            title: 'Empate',
            imageUrl: 'https://i.gifer.com/1yIW.gif',
            imageWidth: 400,
            imageHeight: 225,
            imageAlt: 'Custom image',
        })
    }

    useEffect(() => {
        compareStats()
    }, [totalLeft, totalRight])

    return (
        <>
            <MenuBatalha />
            <C.Background>
                <C.BatalhaPokemons>
                    <PokeBattleCard
                        pokeName={pokeNameLeft}
                        setPokeName={setPokeNameLeft}
                        setTotal={setTotalLeft}
                    />


                    <C.ContainerWinner id='middle-container'>
                        <C.VS src={VS} />

                        {
                            (totalLeft && totalRight) && (totalLeft !== totalRight) ?
                                <Typography variant='h4' color='white'>{vencedorBatalha()}</Typography> : <></>
                        }

                        {
                            (totalLeft && totalRight) && (totalLeft === totalRight) ?
                                <Typography variant='h4' color='white'>{empateBatalha()}</Typography> : <></>
                        }


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