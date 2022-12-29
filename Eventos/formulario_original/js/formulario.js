(function () {
    'use strict';

    const txtTitulo = document.getElementById("txtTitulo")
    const btn = document.getElementById("btn")
    const formCadastro = document.querySelector(".formCadastro")

    formCadastro.addEventListener("submit", function(e){
        if(!txtTitulo.value){
            alert("Preencha os dados do formulário!")
            e.preventDefault()
            txtTitulo.focus()
    
        }

    })

})()