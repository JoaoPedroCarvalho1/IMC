let inputWeight = document.getElementById("weight");
let inputHeight = document.getElementById("height");

// coletar valores do HTML
function calc () {

    let weight = inputWeight.value;
    let height = inputHeight.value;
    
    let imc = weight / (height ** 2);

    // calculo do iMc

    let total = imc.toFixed(2)

    // arredondando

    result.innerHTML = `<h2> Seu IMC é: ${total}</h2>`;

    // resultado no HTML

    if(imc<18.5){
        result.innerHTML += `Você está abaixo do peso`;
    }
    else if(imc<24.9){
        result.innerHTML += `Você está no Peso Normal`;
    }
    else if(imc<29.9){
        result.innerHTML += `Você está com excesso de peso`;
    }
    else if(imc<34.9){
        result.innerHTML += `Você está com Obesidade Classe I`;
    }
    else if(imc<39.9){
        result.innerHTML += `Você está com Obesidade Classe II`;
    }
    else if(imc>39.9){
        result.innerHTML += `Você está com Obesidade Classe III`;
    }
    else{
        result.innerHTML += `ERRO Tente Novamente`;
    }
}
