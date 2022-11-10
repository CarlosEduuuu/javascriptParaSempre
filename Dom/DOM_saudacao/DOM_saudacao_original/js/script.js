(function(){
    const nomeUsuario = document.querySelector(".top-bar p")
    const temUsuario = prompt("Tem usuário? s/n ")
    if (temUsuario ==="y" || temUsuario === "s"){
        //nomeUsuario.textContent += "<b>" + "Carlos" + "</b>"//tags textContent não entendem tags html
        nomeUsuario.innerHTML += `<b> Carlos </b>`//Já o innerHTML funciona

    }else{
        //esconder somente o paragrafo
        //nomeUsuario.style.display = "none"
        //esconder o pai do paragrafo
        //nomeUsuario.parentElement.style.display = "none"//esconder elementos
        //remover de fato
        //nomeUsuario.remove()//não funciona no IE
        //para remover no IE, primeiro acessa o pai e depois acessa o filho
        const elementoParaRemover = nomeUsuario.parentElement
        elementoParaRemover.parentElement.removeChild(elementoParaRemover)
    }
})()