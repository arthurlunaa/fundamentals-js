
function getPokemom (pokemom) {
    fetch (`https://pokeapi.co/api/v2/pokemon/${pokemom}`)
    .then (res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error' , error))
}
getPokemom('pikachu')