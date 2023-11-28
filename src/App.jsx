import Navbar from './components/Navbar'
import PokemonsList from './components/PokemonsList'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  return (
    <div className='app'>
      <Navbar />
      <PokemonsList />
    </ div>
  )
}

export default App
