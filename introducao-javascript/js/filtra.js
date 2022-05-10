const campoIntupFiltro = document.querySelector(".input-filtro")

campoIntupFiltro.addEventListener("input", function(){
    const listaPacientes = document.querySelectorAll(".paciente")
    
    for (let contador = 0; contador < listaPacientes.length; contador++){
        const paciente = listaPacientes[contador]
        const nomePaciente = paciente.querySelector(".info-nome").textContent
        const expressaoRegular = new RegExp(this.value, "i")
        
        if (!expressaoRegular.test(nomePaciente) && this.value.length > 0) {
            paciente.classList.add("invisivel")
        }else {
            paciente.classList.remove("invisivel")
        }
    }
        
})