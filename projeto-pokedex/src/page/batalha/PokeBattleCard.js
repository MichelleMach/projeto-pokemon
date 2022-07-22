import ProgressBar from '../../Components/ProgressBar/ProgressBar'
import useRequestData from '../../hooks/useRequestData'
import Menu from '../../Components/menu/Menu'
import { useEffect } from 'react'

const PokeBattleCard = (props) => {

    const data = useRequestData({}, `https://pokeapi.co/api/v2/pokemon/?limit=1126`)[0]

    const onChangeSelect = (event) => {
        props.setPokeName(event.target.value)
    }

    const pokemon = useRequestData({}, `https://pokeapi.co/api/v2/pokemon/${props.pokeName}`)[0]

    const statList =
        pokemon.stats &&
        pokemon.stats.map((statPoke) => {
            return (
                <div>
                    <ProgressBar
                        key={statPoke.stat.name}
                        statText={statPoke.stat.name}
                        value={(statPoke.base_stat / 255) * 100}
                        label={statPoke.base_stat}
                    />
                </div>
            );
        });

    const statSum = () => {
        let sum = 0
        if (pokemon.stats) {
            for (let stat of pokemon.stats) {
                sum = sum + stat.base_stat
            }
        }
        props.setTotal(sum)
        return sum
    }

    useEffect(() => {
        statSum()
    }, [pokemon])

    return (
        <div>

            {/* <Menu /> */}
            <select onChange={onChangeSelect}>
                <option value={""}>Escolha um Pokémon</option>
                {data.results && data.results.map((pokemon) => {
                    return (
                        <option value={pokemon.name} key={pokemon.name}>
                            {pokemon.name && pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                        </option>
                    )
                })
                }
            </select>
            <img src={pokemon.sprites && pokemon.sprites.other["official-artwork"].front_default} />
            <div>
                {statList}
            </div>
        </div>
    )
}

export default PokeBattleCard