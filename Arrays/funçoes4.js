let arr = [1,2,3,4,5,6,7,8]
//push
//acrescenta elementos ao final da array
//altera o array
//retorna na let novoItem o novo length da array

let novoItem =  arr.push("novo", "novo2")
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
let recortar = arr.slice(2,4)//recortar a partir do indice 2 até o indice 4
console.log(recortar)

//splice 
//retorna os elementos removidos
console.log(arr)
let incluir = arr.splice(2,4)// a partir do indice 2 remover 4 elementos
console.log(incluir)


console.log(arr)
let reverter = arr.reverse()
console.log(reverter)
console.log(arr)