var botaoAdicionar = document.querySelector("#adicionar-paciente")
var form = document.querySelector("#form-adiciona")

botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    //Dados do FORM
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
      }

    //verifica se altura e peso são validos
      

    var erros = validaPaciente (paciente)
    
    if (erros.length > 0){

        console.log(erros.length)
        exibeMensagemDeErro(erros)
        return
        
    }
      
    //Chama função que cria efetivamente o novo paciente no HTML
    criarHMTL (paciente)

});

//aAdd dados do form no HTML
function criarHMTL (paciente) {

    //criar lista no HTML (objeto)
    var tr = document.createElement("tr");
    tr.classList.add("paciente")
           
     //Adiciona as Tr no HTML e chama funções = monta td dentro de tr | calcula IMC
    tr.appendChild(montaTd (paciente.nome, "info-nome"))
    tr.appendChild(montaTd (paciente.peso, "info-peso"))
    tr.appendChild(montaTd (paciente.altura, "info-altura"))
    tr.appendChild(montaTd (paciente.gordura, "info-gordura"))
    tr.appendChild(montaTd (calculaImc(paciente.peso, paciente.altura), "info-imc"))
   
    

    // Adicona o Tr criado como filho da tabela adicionando as novas informações no layout
    var tabelaPacientes = document.querySelector("#tabela-pacientes")
    tabelaPacientes.appendChild(tr)

    form.reset();
    var exibeMensagemDeErro = document.querySelector(".mensagens-erro")
    //Limpa mgs de erro antereiores
    exibeMensagemDeErro.innerHTML = ""

    var pacientes = document.querySelectorAll(".paciente");

}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td
    
}

function validaPaciente(paciente) {
  
    var erros = [];
    if (paciente.peso <= 0 || paciente.peso >= 500) {
        
        erros.push("Peso invalido")
    }
    if (paciente.altura <= 0 || paciente.altura >= 3) {
        
        erros.push("Altura invalida")
    }
    if (paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco")
    }

    
    return erros;
    
}


function exibeMensagemDeErro(erros) {
    var ul = document.querySelector(".mensagens-erro")
    ul.innerHTML = ""

      
    erros.forEach (function(erro){
        var li = document.createElement("li")
        li.textContent = erro;
        ul.appendChild(li)

    })
      
   
}