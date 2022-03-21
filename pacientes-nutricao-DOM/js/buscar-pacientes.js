var btBuscaPacientes = document.querySelector("#buscar-pacientes");

btBuscaPacientes.addEventListener('click', function(event){

    event.preventDefault;

    var request = new XMLHttpRequest;

    request.open ("GET", "https://api-pacientes.herokuapp.com/pacientes");
    
    request.send();
    
    request.addEventListener("load", function(){

        if (request.status != 200) {
            var codErro = request.status
            alert("Erro na conexão com banco de dados de pacientes " + "[" + codErro + "]" )
        }
        
        var resposta = request.responseText;
        var pacientes = JSON.parse(resposta);
        console.log(typeof pacientes)
        console.log(pacientes.length)
        
        for (i =0; pacientes.length > i; i++){

            paciente = pacientes[i]
           
            criarHMTL (paciente)

            
            
        }
 
        
    
    }) 



})

