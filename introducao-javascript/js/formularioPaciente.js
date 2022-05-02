botaoAddPaciente.addEventListener("click", function (event) {
    event.preventDefault();
    const formulario = document.querySelector("#form-adiciona");

    const paciente = obterPacienteDoFormulario(formulario)
    const pacienteTr = criarTrPaciente(paciente)
    
    if(!validaPaciente(paciente)){
        return;
    }
    
    tabela.appendChild(pacienteTr)
    formulario.reset()
})

function obterPacienteDoFormulario (formulario){
    const paciente = {
        nome: formulario.nome.value,
        peso: formulario.peso.value,
        altura: formulario.altura.value,
        percentualGordura: formulario.gordura.value,
        imc: calcularImc(formulario.peso.value, formulario.altura.value)
    }

    return paciente
}

function criarTrPaciente(paciente) {
    const pacienteTr = document.createElement("tr")
    pacienteTr.classList.add("paciente")

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.percentualGordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-nome"));

    return pacienteTr
}

function montaTd(dado, classe){
    const td = document.createElement("td")
    td.textContent = dado
    td.classList.add(classe)

    return td
}

function validaPaciente(paciente){
    if(validaAltura(paciente.altura) && validaPeso(paciente.peso)){
        return true
    } else {
        return false
    }
}