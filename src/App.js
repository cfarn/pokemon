// import{Box} from '@chakra-ui/react'
import {useState, useEffect} from 'react'

const App = () => {
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const request = await fetch('https://pokeapi.co/api/v2/pokemon/1')
    const response = await request.json()
    // console.log(response)
    setPokemon(response)
  }

  const randomPokemonClick = () => {
    const random = Math.floor(Math.random() * 151) + 1

    const fetchRandomData = async () => {
      const randomRequest = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}`)
      const randomResponse = await randomRequest.json()
      setPokemon(randomResponse)
    }

    fetchRandomData()
  }


  if(!pokemon){return null }

  return (
    <main className='bg-primary vh-100'>
      <div className='row justify-content-center align-items-center'>
        <div className='card col-3 justify-center p-3'>
          <img src={pokemon.sprites.other["official-artwork"].front_default} alt="pokemon"></img>
          <h1 className='text-center'>{pokemon.name}</h1>
          <p>Height : {pokemon.height}</p>
          <p>Weight : {pokemon.weight}</p>
          <p>Type :</p>
          <ul>
            {pokemon.types.map((type) => (
            <li key={type.slot}>{type.type.name}</li>
            ))}
          </ul>
          <button onClick={randomPokemonClick} className='btn btn-outline-primary'>Show random pokemon</button>
        </div>
      </div>
    </main>
    
  )
}

export default App
