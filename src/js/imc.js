function paImc(peso, altura){
    const Imc = peso / (altura * altura);
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
    
    
 
}
paImc (104 , 1,85);