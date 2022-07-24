import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../Context/GlobalStateContext'
import Menu from '../menu/Menu'
import * as C from './styled'
import Swal from "sweetalert2";
import Ash from './imagens/ash.gif'
import Xis from './imagens/xis.png


export default function Pokedex() {
  const navigate = useNavigate()

  const { states } = useContext(GlobalContext)
  const [pokemonsAdd, setPokemonsAdd] = useState(states.pokedex)

  const alertaSoltarPokemon = (pokemon) => {
    Swal.fire({
      title: 'Tem certeza que quer se despedir do seu Pokemon?',
      showCancelButton: true,
      imageUrl:'https://i.gifer.com/20dm.gif',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim'
    })
      .then((result) => {
        if (result.isConfirmed) {
          console.log(pokemon)
          setPokemonsAdd(pokemonsAdd.splice(pokemon, 1))
        } else if (result.isDenied) {
          Swal.fire('Seu Pokemon ainda está na Pokebola')

        }
      })};

  const listPokedex = pokemonsAdd && pokemonsAdd.map((pokemon) => {

        return (

          <C.ContainerCard key={pokemon.id}>

            <div>
              <C.Etiquetas>
                <C.EtiquetaTipo1>{pokemon.types[0].type.name}</C.EtiquetaTipo1>
                <C.EtiquetaTipo2>#{pokemon.order}</C.EtiquetaTipo2>
              </C.Etiquetas>
              <C.PokeImg alt={pokemon} src={pokemon.sprites.other.home.front_default} />
            </div>

            <C.ContainerInfos>

              <C.Header>
                <p> <strong>{pokemon.name.toUpperCase()} </strong> </p>
                <C.ButtonX onClick={() => alertaSoltarPokemon(pokemon)} ><C.ImgX src={Xis}/></C.ButtonX>
              </C.Header>


              <C.Tr>
                <strong><td>Ataque</td></strong>  <td>{pokemon.stats[1].base_stat} </td>
              </C.Tr>
              <C.Tr>
                <strong><td> Defesa</td></strong> <td> {pokemon.stats[2].base_stat} </td>
              </C.Tr>
              <C.Tr>
                <strong><td>Velocidade</td></strong> <td>{pokemon.stats[5].base_stat}</td>
              </C.Tr>
              <C.Tr>
                <strong><td>Resistência </td></strong>  <td> {pokemon.stats[0].base_stat}</td>
              </C.Tr>
              <C.Tr>
                <strong><td>Ataque-especial</td></strong>  <td>{pokemon.stats[3].base_stat} </td>
              </C.Tr>
              <C.Tr>
                <strong><td>Defesa-especial</td></strong> <td>{pokemon.stats[4].base_stat} </td>
              </C.Tr>
            </C.ContainerInfos>
          </C.ContainerCard>
        )
      })
    return (
      <div>
        <Menu />
        <C.Inicio>

        {states.pokedex == 0 ? <div><C.Frase><b>Não há Pokemons por aqui!</b>  </C.Frase><C.Choro src={Ash} /></div> :
        <C.Container>  {listPokedex} </C.Container>}
        </C.Inicio>
        
      
          
       

        <C.Frase> Não há Pokemons por aqui! </C.Frase>
<C.Choro src={Ash} />
        </C.Inicio>

        <C.Container>
          {pokemonsAdd.map((pokemon) => {

            return (

              <C.ContainerCard key={pokemon.id}>

                <div>
                  <C.Etiquetas>
                    <C.EtiquetaTipo1>{pokemon.types[0].type.name}</C.EtiquetaTipo1>
                    <C.EtiquetaTipo2>#{pokemon.order}</C.EtiquetaTipo2>
                  </C.Etiquetas>
                  <C.PokeImg alt={pokemon} src={pokemon.sprites.other.home.front_default} />
                </div>

                <C.ContainerInfos>

                  <C.Header>
                    <p> <strong>{pokemon.name.toUpperCase()} </strong> </p>
                    <ion-icon onClick={() => alertaSoltarPokemon(pokemon)} name="close-circle-outline"></ion-icon>
                  </C.Header>


                  <C.Tr>
                    <strong><td>Ataque</td></strong>  <td>{pokemon.stats[1].base_stat} </td>
                  </C.Tr>
                  <C.Tr>
                    <strong><td> Defesa</td></strong> <td> {pokemon.stats[2].base_stat} </td>
                  </C.Tr>
                  <C.Tr>
                    <strong><td>Velocidade</td></strong> <td>{pokemon.stats[5].base_stat}</td>
                  </C.Tr>
                  <C.Tr>
                    <strong><td>Resistência </td></strong>  <td> {pokemon.stats[0].base_stat}</td>
                  </C.Tr>
                  <C.Tr>
                    <strong><td>Ataque-especial</td></strong>  <td>{pokemon.stats[3].base_stat} </td>
                  </C.Tr>
                  <C.Tr>
                    <strong><td>Defesa-especial</td></strong> <td>{pokemon.stats[4].base_stat} </td>
                  </C.Tr>
                </C.ContainerInfos>

              </C.ContainerCard>

            )
          })
          }
        </C.Container>

      </div>
    )
   }