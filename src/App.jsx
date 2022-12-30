import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import CardPokemon from './components/CardPokemon'

function App() {
  const [pokemon, setPokemon] = useState()
  const [textSearch, setTextSearch] = useState('')

  useEffect(()=>{
    let URL
    if(textSearch){
      URL = `https://pokeapi.co/api/v2/pokemon/${textSearch}`
    } else {
      URL = 'https://pokeapi.co/api/v2/pokemon/pikachu'
    }
    
    axios.get(URL)
    .then(res => setPokemon(res.data))
    .catch(err => console.log(err))
  },[textSearch])

  console.log(pokemon)

  const handleSubmit = e => {
    e.preventDefault()
    setTextSearch(e.target.search.value) 
  }

  return (
    <div className="App">
      <h1>Pokemon</h1>
      <form onSubmit={handleSubmit}>
        <input id="search" type="text" />
        <button>Search</button>
      </form>
      <br />
      <CardPokemon pokemon={pokemon}/>
    </div>
  )
}

export default App
