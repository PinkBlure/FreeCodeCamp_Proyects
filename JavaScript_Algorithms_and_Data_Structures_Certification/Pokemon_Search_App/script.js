const pokemonApp = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon"

const inputEl = document.getElementById("search-input")
const buttonEl = document.getElementById("search-button")

const pokemonNameEl = document.getElementById("pokemon-name")
const pokemonIdEl = document.getElementById("pokemon-id")
const pokemonWeightEl = document.getElementById("weight")
const pokemonHeightEl = document.getElementById("height")
const pokemonSpriteEl = document.getElementById("sprite")
const pokemonTypesEl = document.getElementById("types")

const hpEl = document.getElementById("hp")
const attackEl = document.getElementById("attack")
const defenseEl = document.getElementById("defense")
const spAttackEl = document.getElementById("special-attack")
const spDefenseEl = document.getElementById("special-defense")
const speedEl = document.getElementById("speed")

let pokemonName

buttonEl.addEventListener('click', () => {

  pokemonName = newInput(inputEl.value)
  const pokemonLink = `${pokemonApp}\\${pokemonName}` 
  
  fetchData(pokemonLink)

})

const fetchData = async (pokemonLink, pokemonName) => {
  try {
    const res = await fetch(pokemonLink)
    const data = await res.json()
    showPokemon(data)
  } catch (err) {
    alert('Pokémon not found')
  }
}

const showPokemon = (data) => {

  const { exp , height, id, order, sprites, stats, types, weight} = data
  const { base_stat , effort , stat } = stats

  //Tramitar esto
  console.log(stats[0])

  // const { name, url } = stat

  pokemonNameEl.innerText = pokemonName.toUpperCase()
  pokemonIdEl.innerText = `#${id}`
  pokemonWeightEl.innerText = `Weight: ${weight}`
  pokemonWeightEl.innerText = `Weight: ${weight}`
  pokemonHeightEl.innerText = `Height: ${height}`
  
  // console.log(order)
  // console.log(sprites)
  // console.log(stats)
  // console.log(types)
  

}

const newInput = (value) => {

  let newValue = value.toLowerCase()

  if (newValue.split('').includes('♀')) {
    return `${newValue.replace(/[^\w\s]/gi, '')}-f`
  } else if (newValue.split('').includes('♂')) {
    return `${newValue.replace(/[^\w\s]/gi, '')}-m`
  } else {
    return newValue.replace(/[^\w\s]/gi, '').split(' ').join('-')
  }
  
}


