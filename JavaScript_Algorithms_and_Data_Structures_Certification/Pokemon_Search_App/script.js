const pokemonApp = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon"

const inputEl = document.getElementById("search-input")
const buttonEl = document.getElementById("search-button")

buttonEl.addEventListener('click', () => {

  const pokemonLink = `${pokemonApp}\\${newInput(inputEl.value)}` 
  
  fetchData(pokemonLink)

})

const fetchData = async (pokemonLink) => {
  try {
    const res = await fetch(pokemonLink)
    const data = await res.json()
    showPokemon(data)
  } catch (err) {
    alert('Pokémon not found')
  }
}

const showPokemon = (data) => {

  console.log("data")

}

const newInput = (value) => {

  if (value.split('').includes('♀')) {
    console.log("Si incluye ♀")
  } else if (value.split('').includes('♂')) {
    console.log("Si incluye ♂")
  } else {
    console.log("No incluye")
  }

  return "pikachu"
  
}


