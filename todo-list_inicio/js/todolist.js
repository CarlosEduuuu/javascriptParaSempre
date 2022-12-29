; (function () {
    "use strict"

    //armazenar o dom em variáveis
    const todoAddForm = document.getElementById("todo-add")
    const itemInput = document.getElementById("item-input")
    const ul = document.getElementById("todo-list")

    todoAddForm.addEventListener("submit", function (e) {
        e.preventDefault()//não enviar o formulário
        //criar uma li com o valor do input
        ul.innerHTML += `<li class="todo-item">   
       <p class="task-name"> ${itemInput.value}</p></li>`

        //melhoria, limpar o valor do input
        itemInput.value = ""
        //colocar focus no input
        itemInput.focus()
    })


})()