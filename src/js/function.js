//function Saudacao() {
  //  return console.log("Ola,mundo")
//}
//Saudacao()

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

function ShortName (fullName){
    
    const splitName = fullName.split(" ")
    const [firstName, ...rest ] = splitName
    const lastName = rest[rest.length -1]
    return console.log(`${firstName} ${lastName}`)
}
ShortName ('Arthur henrique nazare Luna')
