const botao = document.querySelector("#buscar-paciente")

botao.addEventListener("click", function(){
    const xhr = new XMLHttpRequest()

    xhr.open("get", "https://api-pacientes.herokuapp.com/pacientes")

    xhr.addEventListener("load", function(){
        console.log(xhr.responseText)
    })

    xhr.send()
})