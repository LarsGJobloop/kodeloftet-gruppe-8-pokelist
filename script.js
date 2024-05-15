import { pokemonList } from './pokemonData.js'

// How to access individual fields of objects
// const lars = {
//     name: "Lars",
//     age: 34,
// }
// console.log(lars)
// console.log(lars.name)
// console.log(lars.age)

// console.log(pokemonList.results)

for (const pokemon of pokemonList.results) {
    // Lage et html element
    const newElement = createPokemonCard(pokemon)

    // Sett inn i dokument
    const list = document.getElementById("pokemon-list")
    list.appendChild(newElement)
}

function createPokemonCard(pokemon) {
    const pokemonCard = document.createElement("li")
    pokemonCard.textContent = pokemon.name
    pokemonCard.className = "pokemon-card"

    return pokemonCard
}
