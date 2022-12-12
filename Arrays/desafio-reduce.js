//Dado um determinado array, mostrar somente os numeros únicos usando método reduce

const numeros = [1, 2, 3, 4, 1, 3, 5, 7, 8]

const soUnicos = numeros.reduce(function (soUnicos, atual){
    if ( soUnicos.indexOf(atual)  < 0 ){

        soUnicos.push(atual)
        
    }
    return soUnicos

}, [])//array vazia para retorno dos dados
console.log(soUnicos)

