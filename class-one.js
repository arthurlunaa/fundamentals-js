// variables



/*var nome = 'nome'
let temp = 'temporario'
const constante = 'constante' 

nome = 100
temp = 200

console.error(typeof'ERROR: TYPEERROR')
console.info( typeof ' servidor está rodando')
console.table(typeof[1,2,3])
console.warn(typeof ' lib antiga')
console.time(typeof 'passou pelo useEffect')
console.clear(typeof)
*/


let name  = 'Github'
const age = 24
let isApproved =  false
let date =  null
let address

const languages =  ['java', 'javascript', 'php']
const numbers = [1, 2, 3]

numbers[3] = 'chocolate'

console.log(numbers,'estou falando desse')

const user = {
    email: 'teste@teste.com',
    password: 'teste123',
    age: 10
}

const {email, password} = user
console.log(password , email, 'desestruturei o user')

console.log(user.age)
console.log(user.email)
console.log(user.password)


console.log(name)
console.log(age)
console.log(isApproved)
console.log(date)
console.log(address)
console.log(languages)
console.log(user)

// merodos string contando caracteres e espaços

const fullName = 'Suporte de Domingo'

const contaLetras = fullName.length
console.log(contaLetras)

const stringToArray = fullName.split(' ')
console.log(stringToArray)

const username = stringToArray[0] + ' ' + stringToArray[2]
console.log(username)

// upperCase
const maiusculo = fullName.toLocaleUpperCase()
console.log(maiusculo)

// lowerCase
const minusculo = fullName.toLocaleLowerCase()
console.log (minusculo)

//buscar indice 

console.log(fullName.indexOf('de'), 'indexOf')

// corta string por indice
console.log(fullName.slice(8, 10))
