(function(){
    
const nomeUsuario = "carlos"

if (nomeUsuario){
    //cria variável e cria elemento div (tag)
    const topBarElemento = document.createElement("div")
    //da um nome para elemento
    topBarElemento.className = "top-bar"
    //inserir texto no elemento
    topBarElemento.innerHTML =`<p><b> Bem-vindo, Carlos </b></p>`

    //referência para inserir elementos
    //elementoPai.insertBefore(novoElemento, elementoReferência)
    const elementoPai = document.querySelector(".hero")
   //elementoPai.insertBefore(topBarElemento, elementoPai.firstChild)
   //nesse caso, como há um comentário no html ele ecaba encontrando-o como primeiro filho
   elementoPai.insertBefore(topBarElemento, elementoPai.firstElementChild)
   
}
})()