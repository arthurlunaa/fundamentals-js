function paImc(peso, altura){
    const Imc = peso / (altura *2 );
    let classificacao;
    
    if (Imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (Imc < 24.99) {
        classificacao = "Peso normal";
    } else if (Imc < 29.99) {
        classificacao = "Acima do peso";
    } else {
        classificacao = "Obesidade";
    }
    
    
    
 console.log (`IMC: ${Imc.toFixed(2)} | classificacao: ${classificacao}`);
}
paImc (82 , 1,55);