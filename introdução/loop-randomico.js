//criar um array com 10 numeros randomicos não repetidos

const numeros = []
const aleatirios = []
const repetidos = []

function gerarNumeros(max) {

    let numeroGerado = parseInt(Math.random() * max)
    return numeroGerado

}

while (aleatirios.length <= 9) {
    let Ngerado = gerarNumeros(50)
    numeros.push(Ngerado)
    
    if (aleatirios.indexOf(Ngerado) < 0) {
        aleatirios.push(Ngerado)
       
    } else {
        repetidos.push(Ngerado)
        
    }

}


gerarNumeros()
console.log(`Numeros originais: ${numeros}` )
console.log(`Numeros repetidos: ${repetidos}`)
console.log(`Numeros aleatórios: ${ aleatirios}`)
console.log(`Numeros aleatórios: ${ aleatirios.length}`)
console.log(`Numeros originais: ${numeros.length}` )