const txtEmail = document.getElementById("txtEmail")

function habilitarInput(){
    //propriedade disabled usada no input txt do html 
    txtEmail.disabled = false//dou false para desabilita-la
    txtEmail.focus()//propriedade focus(), utilizada para dar focus direto no input

}

function desabitilarInput(){
txtEmail.disabled = true    //habilita novamente a propriedade disabled do input ou clicar fora 
}
