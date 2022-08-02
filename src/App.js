import {useState, useEffect} from 'react'

const App = () => {
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    fetchData()
  }, [])

  // useEffect(() => {
  // }, [pokemon])

  const fetchData = async () => {
    const request = await fetch('https://pokeapi.co/api/v2/pokemon/1')
    const response = await request.json()
    console.log(response)
    setPokemon(response)
  }

  // const randomPokemonClick = () => {
  //   setPokemon(pokemon)
  // }

  if(!pokemon){return null }

  return (
    <div>
      <img src={pokemon.sprites.front_default} alt="pokemon"></img>
      <h1>{pokemon.name}</h1>
      <p>Height : {pokemon.height}</p>
      <p>Weight : {pokemon.weight}</p>
      <p>Type :</p>
      <ul>
        {pokemon.types.map((type) => (
        <li key={type.slot}>{type.type.name}</li>
        ))}
      </ul>
      {/* <button onClick={randomPokemonClick}>Show random pokemon</button> */}
    </div>
  )
}

export default App
