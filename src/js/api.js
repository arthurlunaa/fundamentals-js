

function getCep (cep) {
    fetch (`https://viacep.com.br/ws/${cep}/json/`)
    .then (res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error' , error))
}
getCep('05869220')