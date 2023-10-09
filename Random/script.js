var numberTofind = 0;
var attemps = 1;

function refresh(){
    // gerar numero aleatório

    numberTofind = parseInt(Math.random() * 10);

    console.log(numberTofind)

}

function verifyNumber(){
    // checar numero

    var bet = document.getElementById('bet').value;

    if( bet > 10 || bet < 1){

        resultado.innerHTML= `<h1>Número inválido</h1>`

    }
    else if( numberTofind < bet){
        attemps++;

        resultado.innerHTML= `<h1>O Número Procurado é Menor</h1>`
        
    }
    else if(numberTofind > bet){
        attemps++;
        resultado.innerHTML= `<h1>O Número Procurado é Maior</h1>`
    }
    else{
        resultado.innerHTML= `<h1>Parabéns Você acertou o Número, com  ${attemps}  Tentativas'</h1>`
    }

}
refresh();