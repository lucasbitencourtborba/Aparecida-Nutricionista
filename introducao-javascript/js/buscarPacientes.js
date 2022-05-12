const botao = document.querySelector("#buscar-paciente")

botao.addEventListener("click", function(){
    const xhr = new XMLHttpRequest()

    xhr.open("get", "https://api-pacientes.herokuapp.com/pacientes")

    xhr.addEventListener("load", function(){
        const respostaApi = xhr.responseText
        const pacientesApi = JSON.parse(respostaApi)
        
        pacientesApi.forEach(function(paciente){
            adicionaPacienteNaTabela(paciente)
        })

        adicionaPacienteNaTabela(paciente)
    })

    xhr.send()
})