let arr = [1, 2, 3, 4, 5, 6, 7, 8]
//push
//acrescenta elementos ao final da array
//altera o array
//retorna na let novoItem o novo length da array

let novoItem = arr.push("novo", "novo2")
console.log(novoItem)
console.log(arr)


//unshift
//parecido com o push porém, acrescenta elementos no inicio do array
//retorna o legth do mesmo
let unshift = arr.unshift("unshift")
console.log(unshift)
console.log(arr)


console.log("---------------------------------------------------------")

//pop 
//remove ultimo elemento do array
//altera o array
//retorna o elemento removido

let itemRemover = arr.pop()
console.log(itemRemover)
console.log(arr)

//shift remove o primeior elemento do arrayprimeiroItem o primeiro item
//aramazena na variável 
let primeiroItem = arr.shift()
console.log(primeiroItem)
console.log(arr)

console.log("---------------------------------------------------------")

//slice usado quando eu quero recortar array
//retorna os elementos que ficaram na array
console.log(arr)
let recortar = arr.slice(2, 4)//recortar a partir do indice 2 até o indice 4
console.log(recortar)

//splice 
//retorna os elementos removidos
console.log(arr)
let incluir = arr.splice(2, 4)// a partir do indice 2 remover 4 elementos
console.log(incluir)

//reverse 
//inverte os elementos de um array, porém, ele modifica o mesmo
//não adianta criar outra variável pois, esse método modifica a array original
console.log(arr)
let reverter = arr.reverse()
console.log(reverter)
console.log(arr)



console.log("--------------------------------------")
//reduce
//retorna sempre um único valor, ex: soma de todos os elementos
let arr2 = [1, 2, 3]
let soma = arr2.reduce(function (acumulador, atual, indice, arr2) {
    return acumulador + atual
})//posso passar mais um parâmetro como inicial
console.log(soma)
console.log(arr2)


//Desafio reduce
console.log("--------Desafio----------")
const numeros = [1, 3, 4, 1, 4, 5, 3, 5, 8, 9,]
//exibir só os numeros não repetidos
const numerosUnicos = [1, 3, 4, 5, 8, 9]
numerosUnicos.reduce(function(numerosUnicos, atual){
    if ( numerosUnicos.indexOf[atual] < 0){
        numerosUnicos.push(atual)
    }
    return numerosUnicos
},[])
console.log("Numeros: " , numeros)
console.log("Numeros únicos: " , numerosUnicos)

