
var campoFiltro = document.querySelector("#filtrar-tabela")


//Evento ao digitar no campo de busca
campoFiltro.addEventListener("input", function () {

    
    
    var pacientes = document.querySelectorAll(".paciente");
    console.log(pacientes.length);

    for (var i = 0; i < pacientes.length; i++){
        
        var paciente = pacientes[i]
        var tdnome = paciente.querySelector(".info-nome")
        var nome = tdnome.textContent
        var expressaoRegular = new RegExp(this.value, "i")

        if (!expressaoRegular.test(nome)) {
            paciente.classList.add("esconde-paciente")
        }else {
            paciente.classList.remove("esconde-paciente")
        }
        
       
        
               
    }

})

