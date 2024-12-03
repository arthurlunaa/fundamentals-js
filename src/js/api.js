
function getPokemom (pokemom) {
    fetch (`https://pokeapi.co/api/v2/pokemon/${pokemom}`)
    .then (res => res.json())
    .then(data => {
       const {name, sprites, weight} = data;
        const nome = `Nome: ${name}`;
       const peso = `Peso: ${weight}`;
        const linkfoto = `Link da foto: ${sprites.front_default}`;
        console.log(nome);
        console.log(peso);
    console.log(linkfoto);
   })

   .catch(error => console.error('Error' , error))
}
getPokemom('pikachu')

