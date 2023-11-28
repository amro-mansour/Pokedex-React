import { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function PokemonCard({ url }) {
  const [pokemon, setPokemon] = useState()
  const [loading, setLoading] = useState(true)
  const [show, setShow] = useState(false);

  // The following functions are used for the opening and closing of the pokemon modal 
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Inside useEffect, we fetch the url received as props to get the data of every pokemon, then this data is saved in the pokemon state 
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setPokemon(data)
        setLoading(false)
      })
      .catch(err => console.log(err))
  }, [])

  const pokemonTypes = pokemon && pokemon.types.map(type => {
    return <p className={`pokemon-type ${typeStyles(type.type.name)}`} key={pokemon.types.indexOf(type)}>
      {type.type.name}
    </p>
  })

  const pokemonAbiliies = pokemon && pokemon.abilities.map(ability => {
    return ability.ability.name
  })

  return loading ? <div className="loader"></div>
    : (
      <>
        {/* Button that triggers the opening of a modal, which contains information about the pokemon clicked  */}
        <button className="modal-button" onClick={handleShow}>
          <h5>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h5>
          <img className="cardImg-btn" src={pokemon.sprites.front_default} />
        </button>

        {/* Pokemon Modal  */}
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h2>
                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
              </h2>
            </Modal.Title>
          </Modal.Header>
          <div className="img-container">
            <img className="card-img" src={pokemon.sprites.front_default} />
          </div>
          <Modal.Body>
            <p>Height: {pokemon.height}</p>
            <div className="abilities-container">Abilities: <p className="pokemon-ability">{pokemonAbiliies.join(', ')}</p></div>
            <div>Type: {pokemonTypes}</div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" className="close-btn" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
}

/********************* styling colors for the pokemons types  ***********************/

const typeStyles = (type) => {
  let backgroundColor = ''
  if (type === 'bug') {
    backgroundColor = 'bug-color'
  }
  else if (type === 'poison') {
    backgroundColor = 'poison-color'
  }
  else if (type === 'grass') {
    backgroundColor = 'grass-color'
  }
  else if (type === 'fire') {
    backgroundColor = 'fire-color'
  }
  else if (type === 'flying') {
    backgroundColor = 'flying-color'
  }
  else if (type === 'water') {
    backgroundColor = 'water-color'
  }
  else if (type === 'normal') {
    backgroundColor = 'normal-color'
  }
  else if (type === 'electric') {
    backgroundColor = 'electric-color'
  }
  else if (type === 'ground') {
    backgroundColor = 'ground-color'
  }
  else if (type === 'fairy') {
    backgroundColor = 'fairy-color'
  }
  else if (type === 'fighting') {
    backgroundColor = 'fighting-color'
  }
  else if (type === 'psychic') {
    backgroundColor = 'psychic-color'
  }
  else if (type === 'rock') {
    backgroundColor = 'rock-color'
  }
  else if (type === 'steel') {
    backgroundColor = 'steel-color'
  }
  else if (type === 'ghost') {
    backgroundColor = 'ghost-color'
  }
  else if (type === 'ice') {
    backgroundColor = 'ice-color'
  }
  else if (type === 'dragon') {
    backgroundColor = 'dragon-color'
  }
  else if (type === 'dark') {
    backgroundColor = 'dark-color'
  }
  return backgroundColor
}