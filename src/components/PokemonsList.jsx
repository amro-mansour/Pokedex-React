import { useEffect, useState } from "react"
import PokemonCard from "./PokemonCard"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function PokemonsList() {
  const [pokemons, setPokemons] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)

  // Pokemons API link, it comprends a query parameter (liimt) at end to set number of pokemons we recieve back
  const pokemonsUrl = "https://pokeapi.co/api/v2/pokemon/?limit=200"

  // the useEffect is used to fetch the pokemons api and get back the list of pokemons, which are then saved in state
  useEffect(() => {
    fetch(pokemonsUrl)
      .then(res => res.json())
      .then(data => {
        setPokemons(data.results)
        setLoading(false)
      })
      .catch(err => console.log(err))
  }, [])

  // first, we filter trough the pokemons array saved in state, to chech if any of them match what the user typed in the search bar,
  // then we map through each pokemon returned from the filter method, to return each pokemon as a <PokemonCard/> component 
  const pokemonsList = pokemons.filter(pokemon => {
    return search.toLowerCase() === ''
      ? pokemon
      : pokemon.name.includes(search)
  }).map(pokemon => {
    return <PokemonCard url={pokemon.url} key={pokemon.name} />
  })

  return loading ? <h2>Pokemons are loading...</h2>
    : (
      <div className="pokemon-list-container">
        {/* Search bar to look up a specific pokemon */}
        <InputGroup style={{ width: '95.5%' }} className='mb-3 search-bar'>
          <Form.Control
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search pokemons" />
        </InputGroup>

        <div className="pokemon-list">
          {pokemonsList}
        </div>
      </div>
    )
}

