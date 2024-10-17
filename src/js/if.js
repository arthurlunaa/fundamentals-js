//const age = 17

//if(age >= 18&& age <=60) {
//    return console.log('você é de maior')
//}else if(age === 17){
//    return console.log('falta 1 ano para voce beber ')
//}else{
  //  return console.error('você é de menor')
//}

const nota = 10
if (nota === 10){
    return console.log('passou por excelencia ')
} else if (nota <=9 && nota >=7){
    return console.log('passou')
} else if (nota >=4 && nota <= 6){
    return console.log ('recuperação')
}else if (nota =>0 && nota <=3){
    return console.log ('reprovado ')
}else {
    return console.error ('nota invalida')
}