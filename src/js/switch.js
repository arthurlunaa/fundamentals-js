const nota = 10

switch (true) {
    case  nota  === 10:
        console.log('voce passou por excelencia  ')
        break;
        case nota <=9 && nota >=7:
            console.log('passou')
            break
            case nota >=4 && nota <= 6:
            console.log('recuperação')
            break
            case nota  <=3 :
            console.log('reprovado')
            break
            
            default:
      console.log ('nota invalida')
}