const pacientes = document.querySelectorAll(".paciente")
const tabelaPacientes = document.querySelector("table")


tabelaPacientes.addEventListener("dblclick", function(event){
    const atributoPacienteTarget =  event.target
    const paiAtributoPaciente = atributoPacienteTarget.parentNode
    paiAtributoPaciente.classList.add("fadeOut")
    setTimeout(function(){
        paiAtributoPaciente.remove()
    }, 900)
})
