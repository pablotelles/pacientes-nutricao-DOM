var pacientes = document.querySelectorAll(".paciente")


//Calcula o imc de todos os pacientes
for (var contador = 0; contador < pacientes.length; contador++){

    paciente = pacientes[contador];

    var pesotd = paciente.querySelector(".info-peso");
    
    var alturatd = paciente.querySelector(".info-altura");
    
    var imctd = paciente.querySelector(".info-imc")

    var peso = pesotd.textContent;
    
    var altura = alturatd.textContent
    

    //calcula IMC    
    calculaImc(peso, altura)
    //Retorna valor final do icm e formata com 2 casas decimais
    imctd.textContent = imc.toFixed(2)
   
}

function calculaImc (peso, altura) {
   
    imc = peso / (altura*altura)
    return imc.toFixed(2)
    
}
