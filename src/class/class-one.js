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


let name = 'Github'
const age = 24
let isApproved = false
let date = null
let address

const languages = ['java', 'javascript', 'php']
const numbers = [1, 2, 3]

numbers[3] = 'chocolate'

console.log(numbers, 'estou falando desse')

const user = {
    email: 'teste@teste.com',
    password: 'teste123',
    age: 10
}

const { email, password } = user
console.log(password, email, 'desestruturei o user')

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
console.log(minusculo)

//buscar indice 

console.log(fullName.indexOf('de'), 'indexOf')

// corta string por indice
console.log(fullName.slice(8, 10))

const remember = 'Mariazinha da Silva '


console.log(remember.length,"remember");

let arrayRemember = remember.split(" ");

console.log(remember.split [0], "split");

console.log(remember.slice, (0, 10), "slice")

// metodos de array 

console.log(arrayRemember.length, 'conta indice ')

const nameRule = arrayRemember[0] + ' ' + arrayRemember[arrayRemember.length - 1];
console.log(nameRule)
console.log (arrayRemember[1],'segundo item de um array')

arrayRemember[4] = 'inseri um item'
console.table(arrayRemember)

arrayRemember.push ('adicionei usando o push'
)
console.table(arrayRemember)

console.log(arrayRemember[arrayRemember.length -1])
arrayRemember.pop

console.log(arrayRemember, 'pop')

arrayRemember.shift()
console.table (arrayRemember, 'shift')

arrayRemember.unshift('novo')
console.table(arrayRemember, 'unshift')

// objeto
const product = {
    name: 'camisa',
    price: 15.98,
    inStock: true,
    brand:'Oakley'
}
console.log (product)
console.log (product.name)
console.log (product.brand)

const {inStock,price} = product
console.log(inStock,price)

product.color = ['Azul', 'Vermelho']


console.log(product.color[0])

