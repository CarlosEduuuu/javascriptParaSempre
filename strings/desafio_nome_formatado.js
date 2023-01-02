function formatarNome(nome) {
    if (nome.indexOf(" ") && (nome.lastIndexOf(" ") === -1)) {
   let nomeModificado = (nome.substring(0, nome.indexOf(" ")) + ", " + nome.substring(nome.indexOf(" ") + 1))
        console.log(nomeModificado)
    } else
        console.log(nomeModificado)
}

formatarNome("carlos Eduardo feliz")