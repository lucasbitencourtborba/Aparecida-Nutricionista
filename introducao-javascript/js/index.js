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

    const tdImc = paciente.querySelector(".info-imc");

    tdImc.innerText = validarPesoEAltura(peso, altura, paciente)
}


function validarPesoEAltura(peso, altura, paciente) {
    let pesoEhValido = false;
    let alturaEhValido = false;

    if (peso <= 0 || peso >= 1000 && altura > 3 || altura < 0) {
        paciente.classList.add("paciente-invalido");
        return "Peso e altura Inválido!";
    } else if (peso <= 0 || peso >= 1000) {
        paciente.classList.add("paciente-invalido");
        return "Peso inválido"
    } else if (altura > 3 || altura < 0) {
        paciente.classList.add("paciente-invalido");
        return "Altura inválida";
    } else {
        pesoEhValido = true;
        alturaEhValido = true;
    }

    if (pesoEhValido && alturaEhValido) {
        return calcularImc(peso, altura);
    }
}



function calcularImc(peso, altura) {
    const imc = peso / Math.pow(altura, 2);
    return imc.toFixed(1);
}

botaoAddPaciente.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(botaoAddPaciente)
    const formulario = document.querySelector("#form-adiciona");

    const nome = formulario.nome.value;
    const peso = formulario.peso.value;
    const altura = formulario.altura.value;
    const percentualGordura = formulario.gordura.value;

    const pacienteTr = document.createElement("tr")
    const nomeTd = document.createElement("td")
    const pesoTd = document.createElement("td")
    const alturaTd = document.createElement("td")
    const gorduraTd = document.createElement("td")
    const imcTd = document.createElement("td")
    
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = percentualGordura;
    imcTd.textContent = 0;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    tabela.appendChild(pacienteTr)
})