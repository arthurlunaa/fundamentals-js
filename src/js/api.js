
function getPokemom (pokemom) {
    fetch (`https://pokeapi.co/api/v2/pokemon/${pokemom}`)
    .then (res => res.json())
    .then((data) => {
       const {name, sprites, weight} = data;
      
       const div = document.getElementById('pokemom-info');

       div.innerHTML = `
        <h2>${name}</h2>
    <img src="${sprites.front_default}" alt="">
    <p> ${weight}</p>
       `
   })

   .catch(error => console.error('Error' , error))
}
getPokemom('raichu')

