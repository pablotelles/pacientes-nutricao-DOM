var pacientes = document.querySelectorAll(".paciente");
var tabela = document.querySelector("#tabela-pacientes")



    tabela.addEventListener("dblclick", function (event) {

        var confirmacaoExcluao = confirm("Confirma e exclusão?")
        console.log(confirmacaoExcluao)

        if (confirmacaoExcluao != false) {
            itemClicado = event.target;
            paiDoItemClicado = itemClicado.parentNode;
    
            paiDoItemClicado.classList.add("Exclusão__paciente-efeito")
            
                setTimeout(function(){
                    paiDoItemClicado.remove()
                },500)
        }else {
            console.log("falso")
        }
           

        
    });
