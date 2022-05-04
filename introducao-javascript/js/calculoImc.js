const titulo = document.querySelector(".titulo-pagina");
titulo.innerText = 'Aparecida Nutricionista';
const listaPacientes = document.querySelectorAll(".paciente");
const botaoAddPaciente = document.querySelector("#adicionar-paciente");
const tabela = document.querySelector("#tabela-pacientes")

// Loop para escrever os imc's
for (let contador = 0; contador < listaPacientes.length; contador++) {
    const paciente = listaPacientes[contador];

    const tdPeso = paciente.querySelector(".info-peso")
    const peso = tdPeso.textContent
    
    const tdAltura = paciente.querySelector(".info-altura")
    const altura = tdAltura.textContent

    let pesoEhValido = validaPeso(peso);
    let alturaEhValido = validaAltura(altura);

    const tdImc = paciente.querySelector(".info-imc");

    if (pesoEhValido && alturaEhValido) {
        tdImc.textContent = calcularImc(peso, altura);
    } else if (!pesoEhValido && !alturaEhValido) {
        paciente.classList.add("paciente-invalido")
        tdImc.textContent = "Altura e peso inválidos"
    } else if (!pesoEhValido){
        paciente.classList.add("paciente-invalido")
        tdImc.textContent = "Peso inválido"
    } else {
        tdImc.textContent = "Altura inválida"
    }
    
}



function validaPeso(peso){
    if (peso <= 0 || peso >= 1000) {
        return false
    } else return true
}

function validaAltura(altura){
    if (altura > 3 || altura < 0) {
        return false
    } else return true
}

function validaNome(nome){
    if (nome.length > 0){
        return true
    } else return false
}

function validaPercentualGordura(percentual) {
    if (percentual > 0){
        return true
    } else return false
}


function calcularImc(peso, altura) {
    const imc = peso / Math.pow(altura, 2);
    return imc.toFixed(1);
}

