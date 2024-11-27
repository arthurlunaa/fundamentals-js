//function Saudacao() {
  //  return console.log("Ola,mundo")
//}
//Saudacao()

const { name } = require("server/plugins/socket")

//function Somar(numOne, numTwo) {
//    return numOne + numTwo
//}
//Somar(10,30)
//console.log(Somar(10,30))


//function Multiplicar (numOne , numTwo) {
//    return numOne * numTwo
//}
//console.log(Multiplicar(18,10))

//function MediaQuery() {
 //   const getWidthScreen =   window.innerWidth
 //   if  (getWidthScreen <400) {
  //      console.log("é mobiler")
  //  } else if (getWidthScreen > 400 && getWidthScreen <780) {
   //     console.log("é tablet")
   // } else {
    //    console.log("é desktop")
    //}
//}
//MediaQuery()
//function Salve() {
 //   return console.log("Salve, sou uma funçao estatica")
//}
//Salve()

//function Saudacao () {
//    return "Ola, mundo dinamica"
//}
//console.log(Saudacao())

///function Somar() {
//    return 2+2
//}
//console.log(Somar())

//funçao dinamica
//function DynaSomar(a,b) {
//    return a + b
//}
//console.log(DynaSomar(10,200))

//function Multiplicar (a , b) {
//    return a * b
//}
//console.log(Multiplicar(10,30))

//function ParImpar(num) {/
    //if (num % 2 === 0) {
   //     return `${num} Par`
  //  } else {
 //       return num + " impar" // operador e espaço no função 
 //   }
//} 
//console.log(ParImpar(2))

//function ShortName (fullName){
    
   // const splitName = fullName.split(" ")
    // [ 'Arthur' , 'henrique' , 'luns']
   // const [firstName, ...rest ] = splitName
    // [1,2,3,4 = [1, ... rest]= [1,2,3]]
   // const lastName = rest[rest.length -1]
  //  //
 //   return console.log(`${firstName} ${lastName}`)
//}
//ShortName ('Arthur henrique nazare Luna')

//const nam = 'Cristiano Ronaldo junior'
//const transform = nam.split(' ')

//const [first , ...rest] = transform

//console.log(transform)
//console.log(first)
//console.log(rest)

//function TrueFalse(bool){
//    if (bool === true) {
//       return 'yes'
//    }
//    else {
//        return'no'
//    }
//}
//console.log(TrueFalse(true))

//function TrueFalse(bool){
//    return bool ? 'yes' : 'no'
//} 
//console.log(TrueFalse(true))

//function age (idade){
 //   return idade >= 18 ? 'maior de idade' :'menor de idade'
//}
//console.log(age(17)) 


//const exampleAnomino = function () {
  //  console.log('funçao anomina')
//}
//exampleAnomino()

//const arrwFunction = () => {
  //   return console.log('arrow function')
//} 
////arrwFunction() 

function camisa (preços ){
  return preços >= 49 ? 'esta na black friday' <=30 : 'produdo for de promação '

}
console.log(camisa(31))