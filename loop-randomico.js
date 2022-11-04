//criar um array com 10 numeros randomicos não repetidos

const numeros = []

for (let x = 0; x <= 20; x++) {
    numeros[x] = parseInt(Math.random() * 10)
    
}

console.log(`Numeros originais: ${numeros}`)
