//Criar duas funções sum e avarege
//As funções podem receber um ou mais parâmetros


function sum() {
    let soma = 0
    for (let x = 0; x < arguments.length; x++) {
        soma += arguments[x]
    }
    return soma
}

function avarege() {
    let media = 0
    for (let x = 0; x < arguments.length; x++) {
        media += arguments[x]
    }
    return media / arguments.length
}


console.log(sum(1, 2, 3))
console.log(sum(1, 2, 3, 4,[1, 2, 3]))


console.log(avarege(1,2,3))
console.log(avarege( ...[1, 2, 3]))