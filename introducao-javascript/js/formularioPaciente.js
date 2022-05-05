botaoAddPaciente.addEventListener("click", function (event) {
    event.preventDefault();
    const formulario = document.querySelector("#form-adiciona");

    const paciente = obterPacienteDoFormulario(formulario)
    const pacienteTr = criarTrPaciente(paciente)
    const erro = validaPaciente(paciente)

    if(erro.length > 0){
        exibeMensagemDeError(erro)
        return;
    }
    
    tabela.appendChild(pacienteTr)
    formulario.reset()
    const ul = document.querySelector("#mensagem-erro")
    ul.innerHTML = ""

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

function exibeMensagemDeError (erros){
    const ul = document.querySelector("#mensagem-erro")
    ul.innerHTML = ""

    erros.forEach(function (erro){
        const li = document.createElement("li")
        li.textContent = erro
        ul.appendChild(li)
    })
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

function validaPaciente(paciente) {

    const erros = [];

    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if (paciente.percentualGordura.length == 0) {
        erros.push("A gordura não pode ser em branco");
    }

    if (paciente.peso.length == 0) {
        erros.push("O peso não pode ser em branco");
    }

    if (paciente.altura.length == 0) {
        erros.push("A altura não pode ser em branco");
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida");
    }

    return erros;
}